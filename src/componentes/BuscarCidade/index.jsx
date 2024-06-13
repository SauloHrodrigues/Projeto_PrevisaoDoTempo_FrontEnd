import styled from "styled-components";
import { SubTitulo } from "../SubTitulo/SubTitulo";
import RotuloDeCampo from "../RotuloDeCampo"
import Lupa from '../../imagens/lupa.png'

const BuscarCidadeContainer = styled.div`
  width: 466px;
  height: 125px;
  padding: 0;
  margin: 0;  
`

const CidadeInput = styled.input`
   width: 458px;
   height: 34px;
   border-radius: 6px;
   border: 2px solid #414aba;
   //inserir figura

`

function BuscarCidade(){
    return(
        <BuscarCidadeContainer>
          <SubTitulo>Buscar Cidade</SubTitulo>

          <label for="buscar">
            <RotuloDeCampo>
                Buscar Cidade
            </RotuloDeCampo>
          </label>
  
              <CidadeInput type="text" name="buscar" id="buscar" />
        </BuscarCidadeContainer>
    )
}
export default BuscarCidade