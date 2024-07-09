import styled from "styled-components";
import { SubTitulo } from "../SubTitulo/SubTitulo";
import RotuloDeCampo from "../RotuloDeCampo"
import {SearchOutlined} from "@ant-design/icons"
import { Input } from "antd";


const BuscarCidadeContainer = styled.div`
  width: 466px;
  height: 125px;
  padding: 0;
  margin: 0; 
`

const CidadeInput = styled(Input)`
   width: 458px;
   height: 40px;
   border-radius: 6px;
   border: 2px solid #414aba;
   //inserir figura

`
const Lupa = styled(SearchOutlined)`
  width: 14px;
  height: 14px;
  cursor: pointer;
  border: 0px 1px 0px 1px;
  padding: 0px 0px 0px 0px;
  gap: 10px;
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
  
              <CidadeInput type="search" placeholder="Digite o nome da cidade"
               suffix={<Lupa /> }>
          
              </CidadeInput>
        </BuscarCidadeContainer>
    )
}
export default BuscarCidade