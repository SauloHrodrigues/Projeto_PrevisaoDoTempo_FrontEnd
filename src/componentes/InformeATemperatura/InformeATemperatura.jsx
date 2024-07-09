import styled from "styled-components"
import { SubTitulo } from "../SubTitulo/SubTitulo";
import RotuloDeCampo from "../RotuloDeCampo"

import CaixaImputFormatada from '../Input'

const ContainerInformeTemperatura = styled.div`
  width: 339px;
  height: 121px;
  margin-right: 260px;
   
`
const DivSubTitulo = styled.div`
  width:100%;
  height: 39px;
  padding: 0;
  margin: 0; 
  margin-bottom: 16px;

`
const DivMaximaMinima = styled.div`
  width: 220px;
  height: 66px;
  display: flex; 
  gap: 15px;
  padding: 0;
   margin: 0;
`
const DivMaxima = styled.div`
  width: 90px;
  height: 66px;
  margin: 0 ;
     
`
function InformeATemperatura(){
    return(
        <ContainerInformeTemperatura>
            <DivSubTitulo>
                <SubTitulo>Informe a temperatura</SubTitulo>
            </DivSubTitulo>
                <DivMaximaMinima>
                    <DivMaxima>
                        <RotuloDeCampo>Máxima</RotuloDeCampo>
                        <CaixaImputFormatada largura="90%" altura="36px" placeholder="Digite aqui" />
                    </DivMaxima>
                    <DivMaxima>
                        <RotuloDeCampo>Mínima</RotuloDeCampo>
                        <CaixaImputFormatada largura="90%" altura="36px" placeholder="Digite aqui" />
                    </DivMaxima>
                </DivMaximaMinima>
            </ContainerInformeTemperatura>
       
    )
}
export default InformeATemperatura