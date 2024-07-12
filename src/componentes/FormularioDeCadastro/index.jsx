import styled from 'styled-components';
import { Titulo } from '../Titulo';
import BuscarCidade from '../BuscarCidade';
import SelecionarData from '../SelecionarData';
import SelecioneTurno from '../SelecioneTurno';
import InformeATemperatura from '../InformeATemperatura/InformeATemperatura';
import InformeOClima from '../InformeOClima';
import { BotaoEstilizado } from '../Botoes';
import { useState } from 'react';
import { AreaDeDados } from '../../AreaDeDados';
import axios from 'axios';

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
  // useEffect(() => {    
  //   async function fetchData () {      
  //     try{        
  //       const data = await minhaFuncao();        
  // // Faça algo com os dados recebidos, se necessário
  //     }
  //     catch (error) {        
  // // Trate o erro aqui, se necessário
  //       console.error('Erro ao buscar dados:', error);     
  //     }  
  //   }   
  //   fetchData(); 
  // }, []);

const [cidadeSelecionada, setCidadeSelecionada]= useState(null)

const handleCidadeSelecionada = (cidade) =>{
  setCidadeSelecionada(cidade)
}// FAZER PARA TODOS OS INPUTS

const validarCampos = ()=>{
  return (
    cidadeSelecionada !== null
  );
};

const salvarCampos = async()=>{
    if(validarCampos()){
    try{
      const dados = {
        nome: cidadeSelecionada

      };

      const resposta = await axios.post("http://localhost:8080/previsao/clima/cidade/", dados, {
        headers: { 'Content-Type': 'application/json' },
      });
      if(resposta.status === 201){
        console.log("Salvou com sucesso!")
      }
    }catch (error){
      console.log("Error: ", error)
    }  
     
    }
}
  // Executa apenas uma vez ao montar o componente
// const handleClick = async () => {    
//     try{      
//     const data = await minhaFuncao();
//     // Faça algo com os dados recebidos, se necessário
//     }
//     catch (error) {
//     // Trate o erro aqui, se necessário
//     console.error('Erro ao buscar dados:', error); }
//    };

    return(
        <AreaDeDados>
            <Titulo>Cadastro de dados meteorológicos</Titulo>
            <Container>
                <BuscarCidade 
                  value={cidadeSelecionada} 
                  onInputChange={handleCidadeSelecionada}

                />
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
                  <BotaoEstilizado cor_de_fundo='#414ABA' cor_da_letra='#ffff'
                  onClick={salvarCampos}>
                    Salvar
                  </BotaoEstilizado>        
                  
                </SessaoDeBotao>          
           </Container>
        </AreaDeDados>
    )
}
export default Formulario