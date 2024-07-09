import styled from 'styled-components';
import { Titulo } from '../Titulo';
import BuscarCidade from '../BuscarCidade';
import SelecionarData from '../SelecionarData';
import SelecioneTurno from '../SelecioneTurno';
import InformeATemperatura from '../InformeATemperatura/InformeATemperatura';
import InformeOClima from '../InformeOClima';
import { BotaoEstilizado } from '../Botoes';
import { minhaFuncao } from '../ListarDadosMeteorologicos';
import { useEffect } from 'react';
import { AreaDeDados } from '../../AreaDeDados';

const Container = styled.div`
  display: flex;
  padding: 0;
  margin-top: 40px;
  
`
const SessaoDeBotao = styled.section`
  width: 409px;
  height: 40px;
  margin-left: 516px;  
`



function Formulario(){
  useEffect(() => {    
    async function fetchData () {      
      try{        
        const data = await minhaFuncao();        
  // Faça algo com os dados recebidos, se necessário
      }
      catch (error) {        
  // Trate o erro aqui, se necessário
        console.error('Erro ao buscar dados:', error);     
      }  
    }   
    fetchData(); 
  }, []);

  // Executa apenas uma vez ao montar o componente
const handleClick = async () => {    
    try{      
    const data = await minhaFuncao();
    // Faça algo com os dados recebidos, se necessário
    }
    catch (error) {
    // Trate o erro aqui, se necessário
    console.error('Erro ao buscar dados:', error); }
   };

    return(
        <AreaDeDados>
            <Titulo>Cadastro de dados meteorológicos</Titulo>
            <Container>
                <BuscarCidade/>
                <SelecionarData/>
            </Container>

            <Container>
              <InformeATemperatura/>
              <SelecioneTurno/>
             
            </Container>

            <Container>
                <InformeOClima/>              
           </Container>
            
           <Container>
                <SessaoDeBotao>
                  <BotaoEstilizado>
                    Cancelar
                  </BotaoEstilizado>        
                  <BotaoEstilizado corDeFundo='#414ABA' corDaLetra='#ffff'
                  onClick={handleClick}>
                    Salvar
                  </BotaoEstilizado>        
                  
                </SessaoDeBotao>          
           </Container>
        </AreaDeDados>
    )
}
export default Formulario