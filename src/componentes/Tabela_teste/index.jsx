import React, { useEffect, useState } from 'react';
import { Table, Tag, Space } from "antd";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

const Tabela = () => {
    const [dados, setDados] = useState([]);
    const [cidadeBuscada, setCidadeBuscada] = useState('');

    useEffect(() => {
        buscarTodosDados();
    }, []);

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

    const listaCidadeToListaDadosMeteorologicos = (listaCidade) => {
        const resposta = listaCidade.flatMap((cidade) => 
            cidade.dadosMeteorologicos.map((dado) => ({
                key: `${cidade.id}-${dado.data}-${dado.turno}`,
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
        setDados(resposta);
    };

    const cidadeToListaDadosMeteorologicos = (cidade) => {
        const resposta = cidade.dadosMeteorologicos.map((dado) => ({
            key: cidade.id,
            cidade: cidade.nome,
            data: dado.data,
            temperatura: `${dado.temperaturaMaxima} / ${dado.temperaturaMinima}`,
            clima: dado.clima,
            turno: dado.turno,
            precipitacao: dado.precipitacao,
            umidade: dado.umidade,
            vento: dado.velocidadeDoVento,
        }));
        setDados(resposta);
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
                    color={turno === "MANHA" ? 'geekblue' : turno === "TARDE" ? 'volcano' : 'green'}
                    key={turno}>
                    {turno.toUpperCase()}
                </Tag>
            )
        },
        {
            key: 'action',
            render: (_) => (
              <Space size="middle">
                <a>Editar</a>
                <a>Deletar</a>
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
            />
        </>
    );
};

export default Tabela;
