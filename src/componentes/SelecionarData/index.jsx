import styled from "styled-components";
import { DatePicker } from "antd";
import { SubTitulo } from "../SubTitulo/SubTitulo";
import RotuloDeCampo from "../RotuloDeCampo"

const SelecionarDataContainer = styled.div`
  width: 236px;
  height: 125px;
  padding: 0;
  margin:0;
  margin-left: 122px;
  border: solid 3px red;  
`

const DatePickerFormatado = styled(DatePicker)` 
   width: 200px;
   height: 40px;
   border-radius: 6px;
   border: 2px solid #414aba;
   padding: 8px 12px;
`

function SelecionarData(){
    return(
        <SelecionarDataContainer>
              <SubTitulo>Selecione a data</SubTitulo>
              <RotuloDeCampo>Data</RotuloDeCampo>
              <DatePickerFormatado></DatePickerFormatado>
        </SelecionarDataContainer>
    )
}
export default SelecionarData