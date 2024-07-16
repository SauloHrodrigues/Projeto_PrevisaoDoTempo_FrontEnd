import styled from 'styled-components';
import { Titulo } from '../Titulo';
import BuscarCidade from '../BuscarCidade';
import SelecionarData from '../SelecionarData';
import InformeATemperatura from '../InformeATemperatura/InformeATemperatura';
import InformeOClima from '../InformeOClima';
import { BotaoEstilizado } from '../Botoes';
import { useState } from 'react';
import { AreaDeDados } from '../../AreaDeDados';
import axios from 'axios';
import { SubTitulo } from '../SubTitulo/SubTitulo';
import RotuloDeCampo from "../RotuloDeCampo"
import TurnoBotao from '../BotaoTurno';

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
const ContainerSelecioneTurno = styled.div`
  width: 256px;
  height: 125px;
  padding: 0;
  margin:0;
`
const ContainerTitulo = styled.div`
  width: 252px;
  height: 39px;
  padding: 0;
  margin:0;
  margin-bottom: 16px;

`
const ContainerDeTurnos = styled.div`
    width: 256px;
    height: 39px;
    display: flex;
    gap: 10px;
    
`


function Formulario(){
 
const [cidadeSelecionada, setCidadeSelecionada]= useState(null);
const [dataSelecionada, setDataSelecionada]= useState(null);
const [temperaturaMaxima, setTemperaturaMaxima]= useState(null);
const [temperaturaMinima, setTemperaturaMinima]= useState(null);
const [turnoSelecionado, setTurnoSelecionado]= useState('');
const [climaSelecionado, setClimaSelecionado]= useState('');
const [precipitacao, setPrecipitacao]= useState('');
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

const handleClimaSelecionado = (valor) =>{
  setClimaSelecionado(valor);
 }

 const handlePrecipitacao = (valor) =>{
  setPrecipitacao(valor);
 }
const validarCampos = ()=>{
   console.log("cidade = "+cidadeSelecionada )
    console.log("data = "+dataSelecionada)
    console.log("maxima = "+temperaturaMaxima)
    console.log("minima = "+temperaturaMinima)
    console.log("turno = "+turnoSelecionado)
    console.log("clima = "+climaSelecionado)
    console.log("Precipitacao = "+precipitacao)
  
  return (
    cidadeSelecionada !== null 
    && dataSelecionada !== null
    && temperaturaMaxima !== null
    && temperaturaMinima !== null
    && turnoSelecionado !== null
    && climaSelecionado !== null
    && precipitacao !== null
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
            precipitacao: precipitacao,
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

            <ContainerSelecioneTurno>
                <ContainerTitulo>
                <SubTitulo>Selecione o turno</SubTitulo>
                </ContainerTitulo>
                <RotuloDeCampo>Turno*</RotuloDeCampo>
                <ContainerDeTurnos>
                    <TurnoBotao  turno = "Manhã" onClick={()=> handleTurnoSelecionado("MANHA")}/>               
                    <TurnoBotao  turno = "Tarde" onClick={()=> handleTurnoSelecionado("TARDE")}/>               
                    <TurnoBotao  turno = "Noite" onClick={()=> handleTurnoSelecionado("NOITE")}/>               
                </ContainerDeTurnos>
            </ContainerSelecioneTurno>
             
            </Container>

            <Container>
                <InformeOClima
                  clima= {climaSelecionado}
                  precipitacao = {precipitacao}
                  onClimaChange= {handleClimaSelecionado}
                  onPrecipitacaoChange = {handlePrecipitacao}
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