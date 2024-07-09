import { FaSearch } from "react-icons/fa";
import styled from "styled-components";


const Lupa = styled(SearchOutlined)`
  width: 14px;
  height: 14px;
  cursor: pointer;
  border: 0px 1px 0px 1px;
  padding: 0px 0px 0px 0px;
  gap: 10px;
  `

const CidadeInput = styled(Input)`
   width: 458px;
   height: 40px;
   border-radius: 6px;
   border: 2px solid #414aba;
   //inserir figura
   `
const hedlerClick = ()=>{
    buscarDadosPorCidade()
}

function InputComLupa(){
    return(
        <div>
            <input type="search" placeholder="Digite o nome da cidade"
               suffix={<Lupa /> }></input>
            <FaSearch 
                onClick={hedlerClick}
            />

        </div>
        
    )
}