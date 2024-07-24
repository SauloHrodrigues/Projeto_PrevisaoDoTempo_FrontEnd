import { useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { Table, Tag, Space, Pagination, Button, Popconfirm } from "antd";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import RotuloDoCampo from '../RotuloDeCampo';



const Tabela = () => {
    const [dados, setDados] = useState([]);
    const [cidadeBuscada, setCidadeBuscada] = useState('');
    const [dadosMeteorologicosPorId, setDadosMeteorologicosPorId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [total, setTotal] = useState(0);
    const [allData, setAllData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        buscarTodosDados();
    }, []);

    useEffect(() => {
        atualizarPaginacao();
    }, [currentPage, pageSize, allData]);

    const abrirPaginaDeCadastro = (id) => {
        navigate(`/cadastro/${id}`);
      };

    const buscarTodosDados = async () => {
        try {
            const response = await axios.get('http://localhost:8080/previsao/clima/cidade/');
            listaCidadeToListaDadosMeteorologicos(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const buscarDadosPorCidade = async () => {
        try {
            const response = await axios.get('http://localhost:8080/previsao/clima/cidade/' + cidadeBuscada);
            cidadeToListaDadosMeteorologicos(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const deletarDadoMeteorologicoPorId = async (id) => {
        try {
          await axios.delete(`http://localhost:8080/previsao/clima/dados/${id}`);
            
          setDados((prevData) => prevData.filter((item) => item.id !== id));          
            
        } catch (error) {
    
            console.error('Erro ao deletar o dado: ', error.message);

        }
    
    }

    const listaCidadeToListaDadosMeteorologicos = (listaCidade) => {
        const resposta = listaCidade.flatMap((cidade) => 
            cidade.dadosMeteorologicos.map((dado) => ({
                key: `${cidade.id}-${dado.data}-${dado.turno}`,
                id: dado.id,
                cidade: cidade.nome,
                data: dado.data,
                temperatura: `${dado.temperaturaMaxima} / ${dado.temperaturaMinima}`,
                clima: dado.clima,
                turno: dado.turno,
                precipitacao: dado.precipitacao,
                umidade: dado.umidade,
                vento: dado.velocidadeDoVento,
            }))
        );
        setTotal(resposta.length);
        setAllData(resposta);
        setDados(resposta.slice(0, pageSize)); 
    };

    const cidadeToListaDadosMeteorologicos = (cidade) => {
        const resposta = cidade.dadosMeteorologicos.map((dado) => ({
            key: cidade.id,
            id: dado.id,
            cidade: cidade.nome,
            data: dado.data,
            temperatura: `${dado.temperaturaMaxima} / ${dado.temperaturaMinima}`,
            clima: dado.clima,
            turno: dado.turno,
            precipitacao: dado.precipitacao,
            umidade: dado.umidade,
            vento: dado.velocidadeDoVento,
        }));
        setTotal(resposta.length);
        setAllData(resposta);
        setDados(resposta.slice(0, pageSize)); 
    };

    const atualizarPaginacao = () => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;

        setDados(allData.slice(startIndex, endIndex));
    };

    const handlePageChange = (page, pageSize) => {
        setCurrentPage(page);
        setPageSize(pageSize);
    };

    const handleKeyDown = (event) => {        
        if(event.key === 'Enter') {            
            buscarDadosPorCidade();
        } 
    };


    const columns = [
        {
            title: 'Cidade',
            dataIndex: 'cidade',
            key: 'cidade',
        },
        {
            title: 'Data',
            dataIndex: 'data',
            key: 'data',
        },
        {
            title: 'Temperatura',
            dataIndex: 'temperatura',
            key: 'temperatura',
        },
        {
            title: 'Clima',
            dataIndex: 'clima',
            key: 'clima',
        },
        {
            title: 'Turno',
            key: 'turno',
            dataIndex: 'turno',
            render: (turno) => (
                <Tag 
                    color={turno === "MANHA" ? 'gold' : turno === "TARDE" ? 'volcano' : 'purple'}
                    key={turno}>
                    {turno.toUpperCase()}
                </Tag>
            )
        },
        {
            key: 'action',
            render: (text, record) => (
              <Space size="middle">
                <a onClick={() => abrirPaginaDeCadastro(record.id)}>Editar</a>
                <Popconfirm
                    title="Você tem certeza que deseja deletar?"
                    onConfirm={() => deletarDadoMeteorologicoPorId(record.id)}
                    okText="Sim"
                    cancelText="Não"
                >
                    <a>Deletar</a>
                </Popconfirm>
              </Space>
            ),
        },
    ];

    const columnsExtends = [
        {
            title: 'Precipitação',
            dataIndex: 'precipitacao',
            key: 'precipitacao',
        },
        {
            title: 'Umidade',
            dataIndex: 'umidade',
            key: 'umidade',
        },
        {
            title: 'Vento',
            dataIndex: 'vento',
            key: 'vento',
        },
    ];

    const expandedRowRender = (record) => {
        const dataSource = [{
            key: record.key,
            precipitacao: record.precipitacao,
            umidade: record.umidade,
            vento: record.vento,
        }];

        return <Table columns={columnsExtends} dataSource={dataSource} pagination={false} />;
    };


    return (
        <>
            <RotuloDoCampo>Cidade*</RotuloDoCampo>
            <div style={{
                width: "458px",
                height: "40px",
                borderRadius: "6px",
                border: "2px solid #414aba",
                marginBottom: "10px",
                display: 'flex',
                alignItems: 'center'
            }}>
                
                <input style={{
                    border: 'none',
                    padding: '5px 10px',
                    fontSize: '14px',
                    outline: 'none',
                    width: '400px'
                }} 
                type="text" 
                placeholder="Buscar cidade" 
                value={cidadeBuscada} 
                onChange={(e) => setCidadeBuscada(e.target.value)} 
                onKeyDown={handleKeyDown} />
                <FaSearch style={{
                    cursor: 'pointer',
                    marginLeft: '5px',
                    fontSize: '16px'
                }}
                onClick={buscarDadosPorCidade}/>
            </div>
            <Table 
                columns={columns} 
                dataSource={dados} 
                expandable={{
                    expandedRowRender,
                }} 
                pagination={false} 
                
            />
            <div style={{display: "flex", marginTop: "10px", justifyContent: "center"}}>
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={total}
                    onChange={handlePageChange}
                    showSizeChanger
                    onShowSizeChange={handlePageChange}
                />
            </div>
        </>
    );
};
export default Tabela;
