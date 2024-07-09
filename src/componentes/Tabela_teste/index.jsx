import { Table, Tag, Space } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import BuscarCidade from "../BuscarCidade";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";


const divImput = styled.div`
    width: "458px";
    height: "40px";
    borderRadius: "6px";
    border: "2px solid #414aba";
    marginBottom:"10px";
    display:'flex';
    alignItems:'center'
`


const Tabela = () => {
    const [dados, setDados] = useState([])
    const [cidadeBuscada, setCidadeBuscada] = useState('')



    useEffect(() => {
        buscarTodosDados()
    }, [])

    const buscarTodosDados = async () => {
        try {
            const response = await axios.get('http://localhost:8080/previsao/clima/cidade/')
            listaCidadeToListaDadosMeteorologicos(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    const buscarDadosPorCidade = async () => {
        try {
            const response = await axios.get('http://localhost:8080/previsao/clima/cidade/' + cidadeBuscada)
            cidadeToListaDadosMeteorologicos(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const listaCidadeToListaDadosMeteorologicos = (listaCidade) => {
        const resposta = listaCidade.flatMap((cidade) => {
            return cidade.dadosMeteorologicos.map((dado) => {
                return {
                    cidade: cidade.nome,
                    data: dado.data,
                    temperatura: `${dado.temperaturaMaxima} / ${dado.temperaturaMinima}`,
                    clima: dado.clima,
                    turno: dado.turno,
                }
            })
        }
        );
        setDados(resposta);
    }
    const cidadeToListaDadosMeteorologicos = (cidade) => {
        const resposta = cidade.dadosMeteorologicos.map((dado) => {
            return {
                cidade: cidade.nome,
                data: dado.data,
                temperatura: `${dado.temperaturaMaxima} / ${dado.temperaturaMinima}`,
                clima: dado.clima,
                turno: dado.turno,
            }
        })
        setDados(resposta);
    }

    const handleKeyDown = (event) => {        
        if(event.key ==='Enter') {            
            buscarDadosPorCidade();
         } 
    };

    const columns = [
        {
            title: 'Data',
            dataIndex: 'data',
            key: 'data',
        },

        {
            title: 'Cidade',
            dataIndex: 'cidade',
            key: 'cidade',
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
            // render: (_, { tags }) => (
            //     <>
            //         {tags.map((tag) => {
            //             let color = tag.length > 5 ? 'red' : 'green';
            //             if (tag === 'loser') {
            //                 color = 'yellow';
            //             }
            //             return (
            //                 <Tag color={color} key={tag}>
            //                     {tag.toUpperCase()}
            //                 </Tag>
            //             );
            //         })}
            //     </>
            // ),
        },
        {
            title: 'editar',
            dataIndex: 'editar',
            key: 'editar',
        },
        {
            title: 'excluir',
            dataIndex: 'excluir',
            key: 'excluir',
        },
    ];

    return (
        <>
            <div style={{width: "458px", height: "40px", borderRadius: "6px", border: "2px solid #414aba", marginBottom:"10px", display:'flex',alignItems:'center'}}>
             

                <input style={{ border: 'none', padding: '5px 10px', fontSize: '14px', outline: 'none', width: '400px' }} 
                    type="text" placeholder="Buscar cidade" value={cidadeBuscada} onChange={(e) => setCidadeBuscada(e.target.value)} onKeyDown={handleKeyDown} />
                
                <FaSearch style = {{cursor:'pointer', marginLeft:'5px',fontSize:'16px' }}
                     onClick={buscarDadosPorCidade}/>
            </div>

            <Table columns={columns} dataSource={dados} />
        </>

    )
}

export default Tabela;