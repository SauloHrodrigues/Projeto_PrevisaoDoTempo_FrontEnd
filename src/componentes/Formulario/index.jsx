import styled from 'styled-components';
import { Titulo } from '../Titulo';
import BuscarCidade from '../BuscarCidade';
import SelecionarData from '../SelecionarData';

const FormolarioContainer = styled.div`
  margin: 0px 0 0 0px;
  padding: 40px 0 120px 120px;
  height: 100%;
  border: solid 2px red;
  
`

const Container = styled.div`
  background-color: beige;
  display: flex;
  padding: 0;
  margin-top: 40px;
  border: solid 2px green;
  
`

function Formulario(){
    return(
        <FormolarioContainer>
            <Titulo>Cadastro de dados meteorológicos</Titulo>
            <Container>
                <BuscarCidade/>
                <SelecionarData/>
            </Container>

            <Container>
                Infomar temperatura e selecionar turno
            </Container>

            <Container>
                informe clima               
           </Container>
            
           <Container>
                botões               
           </Container>
        </FormolarioContainer>
    )
}
export default Formulario