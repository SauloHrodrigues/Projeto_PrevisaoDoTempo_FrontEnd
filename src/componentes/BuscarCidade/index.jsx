import styled from "styled-components";
import { SubTitulo } from "../SubTitulo/SubTitulo";

const BuscarCidadeContainer = styled.div`
  width: 466px;
  height: 125px;
  padding: 0;
  margin: 0;
  border: solid 2px black;
  
`
const TituloDoCampo = styled.h5`
        width: 100px;
        height: 22px;
        padding:0 ;
        padding-top: 16px;
        margin: 0;
        font-family: TT-Supermolot-Regular;
        size: 18;
        font-weight: 400;
        line-height: 22.14px;
        color: #292929;
`

const CidadeInput = styled.input`
   width: 100%;
   height: 40px;
`

function BuscarCidade(){
    return(
        <BuscarCidadeContainer>
          <SubTitulo>Buscar Cidade</SubTitulo>

          <label for="buscar">
              <TituloDoCampo>
              Buscar Cidade
              </TituloDoCampo>
              </label>
  
              <CidadeInput type="text" name="buscar" id="buscar" />
        </BuscarCidadeContainer>
    )
}
export default BuscarCidade