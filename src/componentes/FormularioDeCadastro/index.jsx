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
 
const [cidadeSelecionada, setCidadeSelecionada]= useState(null);
const [dataSelecionada, setDataSelecionada]= useState(null);
const [temperaturaMaxima, setTemperaturaMaxima]= useState(null);
const [temperaturaMinima, setTemperaturaMinima]= useState(null);
const [turnoSelecionado, setTurnoSelecionado]= useState(null);
const [climaSelecionado, setClimaSelecionado]= useState(null);
const [preciptacaoSelecionada, setPreciptacaoSelecionada]= useState(null);
const [umidadeSelecionada, setUmidadeSelecionada]= useState(null);
const [velocidadeDoVento, setVelocidadeDoVento]= useState(null);

const handleCidadeSelecionada = (cidade) =>{
  setCidadeSelecionada(cidade);
}

const handleDataSelecionada = (dataSelecionada) =>{
  setDataSelecionada(dataSelecionada);
}

const handleTemperatura = (temperatura) =>{
  setTemperaturaMaxima(temperatura.maxima);
  setTemperaturaMinima(temperatura.minima);
}

const handleTurnoSelecionado = (turnoSelecionado) =>{
  setTurnoSelecionado(turnoSelecionado)
}

const handleClimaSelecionado = (valores) =>{
  setClimaSelecionado(valores.clima);
  setPreciptacaoSelecionada(valores.precipitacao);
  setUmidadeSelecionada(valores.umidade);
  setVelocidadeDoVento(valores.velocidadeDoVento);
}

const validarCampos = ()=>{
   console.log("cidade = "+cidadeSelecionada )
    console.log("data = "+dataSelecionada)
    console.log("maxima = "+temperaturaMaxima)
    console.log("minima = "+temperaturaMinima)
    console.log("turno = "+turnoSelecionado)
    console.log("clima = "+climaSelecionado)
    console.log("Precipitacao = "+preciptacaoSelecionada)
  
  return (
    cidadeSelecionada !== null 
    && dataSelecionada !== null
    && temperaturaMaxima !== null
    && temperaturaMinima !== null
    && turnoSelecionado !== null
    && climaSelecionado !== null
    && preciptacaoSelecionada !== null
    // && umidadeSelecionada !== null
    // && velocidadeDoVento !== null
  );

};

const salvarCampos = async()=>{
  console.log("Entrou no salvar campos")
    if(validarCampos()){
    try{
      const dados = {
        nome: cidadeSelecionada,
        dadosMeteorologicos:[{
            nomeDaCidade: cidadeSelecionada,
            data: dataSelecionada,
            temperaturaMinima: temperaturaMinima,
            temperaturaMaxima:temperaturaMaxima,
            turno: turnoSelecionado,
            clima: climaSelecionado,
            precipitacao: preciptacaoSelecionada,
            // umidade: umidadeSelecionada,
            // velocidadeDoVento 
        }]

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
    return(
        <AreaDeDados>
            <Titulo>Cadastro de dados meteorológicos</Titulo>
            <Container>
                <BuscarCidade 
                    value={cidadeSelecionada} 
                    onInputChange={handleCidadeSelecionada}
                />
                <SelecionarData
                    value={dataSelecionada} 
                    onInputChange={handleDataSelecionada}
                />
            </Container>

            <Container>
              <InformeATemperatura
                  valorInicial={{maxima: temperaturaMaxima, minima: temperaturaMinima}}
                  onInputChange={handleTemperatura}
              />
              <SelecioneTurno
                  value={turnoSelecionado}
                  onChange={handleTurnoSelecionado}
              />
             
            </Container>

            <Container>
                <InformeOClima
                  valorInicial={{clima: climaSelecionado, precipitacao: preciptacaoSelecionada, umidade: umidadeSelecionada, velocidadeDoVento: velocidadeDoVento}}
                  onInputChange={handleClimaSelecionado}
                />              
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