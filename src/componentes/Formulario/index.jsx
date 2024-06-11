import styled from 'styled-components';
import { Titulo } from '../Titulo';
import BuscarCidade from '../BuscarCidade';
import SelecionarData from '../SelecionarData/SelecionarData';

const FormolarioContainer = styled.header`
  width: 100vw;
  margin: 40px 0 0 120px;
  height: 100%;
  border: solid 2px red;
  
`

const Container = styled.div`
  background-color: beige;
  display: flex;

  
`

function Formulario(){
    return(
        <FormolarioContainer>
            <Titulo>Cadastro de dados meteorológicos</Titulo>
            <Container>
                <BuscarCidade/>
                <SelecionarData/>
            </Container>
            
        </FormolarioContainer>
    )
}
export default Formulario