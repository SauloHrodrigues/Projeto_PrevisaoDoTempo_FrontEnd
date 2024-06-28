import styled from "styled-components";
import { SubTitulo } from "../SubTitulo/SubTitulo";
import RotuloDeCampo from "../RotuloDeCampo";
import SelectComponent from "../Select";
import { InputNumber } from 'antd'

const InformeOClimaContainer = styled.section`
    width: 100%;
    height: auto;
    border: solid 3px red;
`
const ContainerDeDados = styled.div`
     width: 100%;
    height: auto;
    display: flex;
    border: solid 3px green;
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
    height: 40px;
    border-radius: 6px;
    border: 2px solid #414aba;
`

function InformeOClima(){
    return(
        <InformeOClimaContainer>
            <SubTitulo>Informe o clima</SubTitulo>
            <ContainerDeDados>
                <ContainerClima>
                    <RotuloDeCampo>Clima*</RotuloDeCampo>
                    <SelectComponent/>
                </ContainerClima>
                
                <ContainerPrecipitacao>
                    <RotuloDeCampo>Precipitação*</RotuloDeCampo>
                    <InputNumberCustomer/>
                </ContainerPrecipitacao>

                <ContainerUmidade>
                    <RotuloDeCampo>Umidade*</RotuloDeCampo>
                    
                </ContainerUmidade>

                <ContainerVelocidadeCoVento>
                <RotuloDeCampo>Velocidade do vento*</RotuloDeCampo>
                </ContainerVelocidadeCoVento>

            </ContainerDeDados>

        </InformeOClimaContainer>
    )
}
export default InformeOClima