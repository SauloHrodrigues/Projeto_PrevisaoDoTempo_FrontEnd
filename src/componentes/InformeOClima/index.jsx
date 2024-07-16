import styled from "styled-components";
import { SubTitulo } from "../SubTitulo/SubTitulo";
import RotuloDeCampo from "../RotuloDeCampo";
import SelectComponent from "../Select";
import { InputNumber, Select } from 'antd'
import { useState } from "react";

const InformeOClimaContainer = styled.section`
    width: 100%;
    height: auto;
`
const ContainerDeDados = styled.div`
    width: 100%;
    height: auto;
    display: flex;
`
const ContainerClima = styled.section`
    width: 207px
    height: 70px;

`
const ContainerPrecipitacao = styled.section`
    width: 107px
    height: 76px;
    margin-left: 60px;

`
const ContainerUmidade = styled.section`
    width: 90px
    height: 76px;
    margin-left: 60px;
`
const ContainerVelocidadeCoVento = styled.section`
    width: 171px
    height: 76px;
    margin-left: 60px;
    white-space: nowrap;
    
`
const InputNumberCustomer = styled(InputNumber)`
    width: 90px
    height: 70px;
    border-radius: 6px;
    border: 2px solid #414aba;
`
const InputNumberSemSetas = styled.input`
    width: 90px;
    height: 40px;
    border-radius: 6px;
    border: 2px solid #414aba;
    padding-left: 15px;
 
    /* Remover setas de incremento/decremento */
    -webkit-appearance: none; /* Chrome, Safari, Edge, Opera */
    -moz-appearance: textfield; /* Firefox */
    appearance: textfield; /* Conformidade futura */
 
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;
const {Option}= Select;

const opcoesClima = [
    {value: 'ENSOLARADO',label: 'Ensolarado'},
          {value: 'CHUVOSO',label: 'Chuvoso'},
          {value: 'NUBLADO',label: 'Nublado'}
];

const InformeOClima = ({clima, precipitacao, onClimaChange, onPrecipitacaoChange})=>{

    const handleClimaChange = (valor)=>{
        console.log("valo do clima "+ valor.value)
        onClimaChange(valor.value);
    }

    
    const handlePrecipitacaoChange = (valor)=>{
        console.log("valo Precipitação "+ valor)
        onPrecipitacaoChange(valor);
    }
    // const [clima, setClima] = useState(null);
    // const [precipitacao, setPrecipitacao] = useState(null);
    // const [umidade, setUmidade] = useState(null);
    // const [velocidadeDoVento, setVelocidadeDoVento] = useState(null);
  
    // const handleClima = (value)=> {
    //     setClima(value);
    // }

    // const handlePrecipitacao = (value)=> {
    //     console.log("o Handler vale = "+value)
    //     setPrecipitacao(value);
    // }

    // const handleUmidade = (value)=> {
    //     setUmidade(value);
    // }

    // const handleVelocidadeDoVento = (value)=> {
    //     setVelocidadeDoVento(value);
    // }

    return(
        <InformeOClimaContainer>
            <SubTitulo>Informe o clima</SubTitulo>
            <ContainerDeDados>
                <ContainerClima>
                    <RotuloDeCampo>Clima*</RotuloDeCampo>
                    <SelectComponent placeholder="Ensolarado"
                    value={opcoesClima.find(opcao => opcao.value === clima)}
                    onChange={handleClimaChange}
                    Option
                    >
                    {opcoesClima.map(opcao =>(
                        <Option key={opcao.value} value={opcao.value}>
                            {opcao.label}
                        </Option> 
                    ))}
                    
                    </SelectComponent>
                </ContainerClima>
                
                <ContainerPrecipitacao>
                    <RotuloDeCampo>Precipitação*</RotuloDeCampo>
                    <InputNumberCustomer placeholder="3mm"
                        value={precipitacao}
                        onChange={handlePrecipitacaoChange}
                    />
                </ContainerPrecipitacao>

                <ContainerUmidade>
                    <RotuloDeCampo>Umidade*</RotuloDeCampo>
                    <InputNumberCustomer placeholder="3%"
                        // value={umidade}
                        // onChange={handleUmidade}
                    />
                </ContainerUmidade>

                <ContainerVelocidadeCoVento>
                    <RotuloDeCampo>Velocidade do vento*</RotuloDeCampo>
                    <InputNumberCustomer placeholder="3 km/h"
                        // value={velocidadeDoVento}
                        // onChange={handleVelocidadeDoVento}
                    />
                </ContainerVelocidadeCoVento>

            </ContainerDeDados>

        </InformeOClimaContainer>
    )
}
export default InformeOClima