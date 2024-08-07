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
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import CustomBreadcrumb from '../Breadcrumb';
import React from 'react';
import { Form, InputNumber, Select } from 'antd';
import SelectComponent from '../Select';
import { Input } from "antd";
import {SearchOutlined} from "@ant-design/icons"
import { DatePicker } from "antd";
import CaixaImputFormatada from '../Input'
import toast, {Toaster} from 'react-hot-toast';

const notificacaoDeErro = () => toast('Por favor, Preencha todos os campos do formulário.');
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

const ContainerTitulo = styled.div`
  width: 252px;
  height: 39px;
  padding: 0;
  margin:0;
  margin-bottom: 16px;
`
const ContainerTemperaturas = styled.div`
  width: 329px;
  height: 125px;
  padding: 0;
  margin:0;
  margin-right: 259px;
`
const ContainerImputTemperaturas = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 0;
  margin:0;
  margin-right: 259px;
`
const ContainerBlock = styled.div`
  display: block;
`
const ContainerSelecioneTurno = styled.div`
  width: 256px;
  height: 125px;
  padding: 0;
  margin:0;
`
const ContainerBotaoDeTurnos = styled.div`
    width: 256px;
    height: 39px;
    display: flex;
    gap: 10px;
`
const InformeOClimaContainer = styled.section`
    width: 100%;
    height: auto;
`
const ContainerDeDados = styled.div`
    width: 100%;
    height: auto;
    display: flex;
`
const ContainerClima = styled.section`
    width: 207px
    height: 70px;
    margin-right: 60px;
`
const ContainerPrecipitacao = styled.section`
    width: 107px
    height: 76px;
`
const ContainerUmidade = styled.section`
    width: 90px
    height: 76px;
`
const ContainerVelocidadeCoVento = styled.section`
    width: 171px
    height: 76px;
    white-space: nowrap;
`
const InputNumberCustomer = styled(InputNumber)`
    width: 90px
    height: 70px;
    border-radius: 6px;
    border: 2px solid #414aba;
`
const InputNumberSemSetas = styled.input`
    width: 90px;
    height: 40px;
    border-radius: 6px;
    border: 2px solid #414aba;
    padding-left: 15px;
 
    /* Remover setas de incremento/decremento */
    -webkit-appearance: none; /* Chrome, Safari, Edge, Opera */
    -moz-appearance: textfield; /* Firefox */
    appearance: textfield; /* Conformidade futura */
 
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

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

const BuscarCidadeContainer = styled.div`
  width: 466px;
  height: 125px;
  padding: 0;
  margin: 0; 
`
const ContainerClimaInputs = styled.div`
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0; 
  display: block;
`

const SelecionarDataContainer = styled.div`
  width: 236px;
  height: 125px;
  padding: 0;
  margin:0;
  margin-left: 122px;
`

const DatePickerFormatado = styled(DatePicker)` 
   width: 200px;
   height: 40px;
   border-radius: 6px;
   border: 2px solid #414aba;
   padding: 8px 12px;
`

const {Option}= Select;

const optionsList = [
    {value: 'ENSOLARADO',label: 'Ensolarado'},
          {value: 'CHUVOSO',label: 'Chuvoso'}, 
          {value: 'NUBLADO',label: 'Nublado'},
          {value: 'GAROANDO',label: 'Garoando'},
          {value: 'NEVANDO',label: 'Nevando'}
          
];

function Formulario() {
  const { id } = useParams();//pega parametros

  const[form] = Form.useForm();
 
const [cidadeSelecionada, setCidadeSelecionada]= useState('');
const [dataSelecionada, setDataSelecionada]= useState(null);
const [temperaturaMaxima, setTemperaturaMaxima]= useState('');
const [temperaturaMinima, setTemperaturaMinima]= useState('');
const [turnoSelecionado, setTurnoSelecionado]= useState('');
const [clima, setClimaSelecionado]= useState('');
const [precipitacao, setPrecipitacao]= useState('');
const [umidade, setUmidade]= useState('');
const [velocidadeDoVento, setVelocidadeDoVento]= useState('');

useEffect(() => {
  if (id) {
    axios.get(`http://localhost:8080/previsao/clima/dados/${id}`)
      .then(response => {
        const data = response.data;
        setCidadeSelecionada(data.nomeDaCidade);
        setDataSelecionada(moment(data.data.replace(/\//g, '-'),"YYYY-MM-DD"));
        setTemperaturaMaxima(data.temperaturaMaxima);
        setTemperaturaMinima(data.temperaturaMinima);
        setTurnoSelecionado(data.turno);
        setClimaSelecionado(data.clima);
        setPrecipitacao(data.precipitacao);
        setUmidade(data.umidade);
        setVelocidadeDoVento(data.velocidadeDoVento);
        form.setFieldsValue({
          cidadeSelecionada: data.nomeDaCidade,
          dataSelecionada: moment(data.data.replace(/\//g, "-"), "YYYY-MM-DD"),
          temperaturaMaxima: data.temperaturaMaxima,
          temperaturaMinima: data.temperaturaMinima,
          turnoSelecionado: data.turno,
          clima: data.clima,
          precipitacao: data.precipitacao,
          umidade: data.umidade,
          velocidadeDoVento: data.velocidadeDoVento,
        });

        console.log('Nome da cidade ', data.nomeDaCidade)
        console.log('Data - ', data.data)
        console.log('Data selecionada - ', dataSelecionada)
      });
  }
}, [id]);


useEffect(() => {
  console.log('Cidade selecionada atualizada:', cidadeSelecionada);
}, [cidadeSelecionada]);
 
const handleCidadeSelecionada = (cidade) =>{
 const valor = cidade.target.value;
  console.log('o valor de valor no hendler = '+ valor)
  setCidadeSelecionada(valor);
  console.log('valor da cidade selecionada no hendler ='+ cidadeSelecionada)
}

const handleDataSelecionada = (dataSelecionada) =>{
  setDataSelecionada(dataSelecionada);
}

const handleTemperaturaMaxima = (e) =>{
  setTemperaturaMaxima(e.target.value);
}
const handleTemperaturaMinima = (e) =>{
  setTemperaturaMinima(e.target.value);
}

const handleTurnoSelecionado = (turnoSelecionado) =>{
  setTurnoSelecionado(turnoSelecionado)
  form.setFieldsValue({
    turnoSelecionado: turnoSelecionado
   });
}

const handleClimaSelecionado = (valor) =>{
  setClimaSelecionado(valor);
 }

 const handlePrecipitacao = (valor) =>{
  setPrecipitacao(valor);
 }

 const handleUmidade = (valor) =>{
  setUmidade(valor);
 }

 const handleVelocidadeDoVento = (valor) =>{
  setVelocidadeDoVento(valor);
 }

const validarCampos = ()=>{
   
  return (
    cidadeSelecionada !== null 
    && dataSelecionada !== null
    && temperaturaMaxima !== null
    && temperaturaMinima !== null
    && turnoSelecionado !== null
    && clima !== null
    && precipitacao !== null
    && umidade !== null
    && velocidadeDoVento !== null
  );

};

const validaExistenciaDaCidade = async (cidade)=>{
  try {
    const  resposta = await axios.get(`http://localhost:8080/previsao/clima/cidade/${cidade}`);
    return resposta;
  } catch (error) {
    return 400;
  }
}

const salvarCampos = async()=>{
  console.log("Entrou no salvar campos")


    if(validarCampos()){
      console.log('Campos válidos.');
   
      const  resposta = await validaExistenciaDaCidade(cidadeSelecionada)
      console.log('Resposta = '+resposta.status);
      if( resposta && resposta.status == 200){
  
        try{
          const dados = {
            nomeDaCidade: cidadeSelecionada,
            data: dataSelecionada,
            temperaturaMinima: temperaturaMinima,
            temperaturaMaxima:temperaturaMaxima,
            turno: turnoSelecionado,
            clima: clima,
            precipitacao: precipitacao,
            umidade: umidade,
            velocidadeDoVento: velocidadeDoVento,
          }
 
          if(id) {
            const resposta = await axios.put(`http://localhost:8080/previsao/clima/dados/${id}`, dados, {
              headers: { 'Content-Type': 'application/json' },
            });
   
            if (resposta.status === 200) {
              console.log("Atualizou com sucesso!");
            }
 
          } else {
            const resposta = await axios.post("http://localhost:8080/previsao/clima/dados/",
            dados, {
              headers: { 'Content-Type': 'application/json' },
            });
           
            console.log('Requisição dados = '+dados)
            if(resposta.status === 201){
              console.log("Salvou com sucesso!")
            }
          }
 
        }catch (error){
          console.log("Error: ", error)
        }
 
      } else{
        try{
          const dados = {
            nome: cidadeSelecionada,
            dadosMeteorologicos:{
                nomeDaCidade: cidadeSelecionada,
                data: dataSelecionada,
                temperaturaMinima: temperaturaMinima,
                temperaturaMaxima:temperaturaMaxima,
                turno: turnoSelecionado,
                clima: clima,
                precipitacao: precipitacao,
                umidade: umidade,
                velocidadeDoVento: velocidadeDoVento
            }            
          };
          console.log('Dados: ');
          console.log('Nome da cidade: '+ dados.dadosMeteorologicos.nomeDaCidade);
          console.log('Nome da cidade: '+ dados.dadosMeteorologicos.nomeDaCidade);
          console.log('Temperatura minima: '+ dados.dadosMeteorologicos.temperaturaMinima);
          console.log('Temperatura maxima: '+ dados.dadosMeteorologicos.temperaturaMaxima);
          console.log('Turno: '+ dados.dadosMeteorologicos.turno);
          console.log('Clima: '+ dados.dadosMeteorologicos.clima);
          console.log('Clima: '+ dados.dadosMeteorologicos.clima);

   
          const resposta = await axios.post("http://localhost:8080/previsao/clima/cidade/", dados, {
            headers: { 'Content-Type': 'application/json' },
   
          });
 
          console.log('Requisição cidade = '+dados)
         
          if(resposta.status === 201){
            console.log("Salvou com sucesso!")
          }
        }catch (error){
          console.log("Error: ", error)
        }
      }
    }else{
      toast.error('Por favor, preencha todos os campos antes de salvar.');
      
    }
}//fim do salvarCodigo

    return(
      <>
        <CustomBreadcrumb rota={"Cadastro de dados metereológicos" } />
        <AreaDeDados>
          
            <Titulo>Cadastro de dados meteorológicos</Titulo>
            <Form form={form}>
              <Container id='buscarCidade_data'>
                    <BuscarCidadeContainer>
                      <SubTitulo>Buscar Cidade</SubTitulo>
                        <label>
                          <RotuloDeCampo>
                              Buscar Cidade
                          </RotuloDeCampo>
                        </label>
                      
                          <Form.Item  
                              name="cidadeSelecionada"
                              rules={[{required:true, message: "Selecione uma cidade."}]}
                          >
                            
                            <CidadeInput 
                              type="search" 
                              placeholder="Digite o nome da cidade"
                              suffix={<Lupa /> } 
                              value={cidadeSelecionada} 
                              onChange={handleCidadeSelecionada}
                              disabled = {id != null}
                            /> 
                          </Form.Item>
                      </BuscarCidadeContainer>

                      <SelecionarDataContainer>
                            <SubTitulo>Selecione a data</SubTitulo>
                            <label>
                              <RotuloDeCampo>Data</RotuloDeCampo>
                            </label>
                            <Form.Item  
                                name="dataSelecionada"
                                rules={[{required:true, message: "Informe uma data"}]}
                            >
                              
                            <DatePickerFormatado value={dataSelecionada}
                              onChange={handleDataSelecionada}
                              format="YYYY-MM-DD"
                            >
                            </DatePickerFormatado>
                          </Form.Item>
                  </SelecionarDataContainer>
              </Container>

              <Container id='temperatura_turno'>
                <ContainerTemperaturas>
                  <SubTitulo>Informe a temperatura</SubTitulo>
                  <ContainerImputTemperaturas>
                      <ContainerBlock>
                          <RotuloDeCampo>Máxima</RotuloDeCampo>
                          <Form.Item  
                                  name="temperaturaMaxima"
                                  rules={[{required:true, message: "Informe a temperatura"}]}
                              >
                              <CaixaImputFormatada
                                  largura="90px"
                                  altura="40px"
                                  placeholder="Digite aqui"
                                  value={temperaturaMaxima} 
                                  onChange={handleTemperaturaMaxima}
                              />
                          </Form.Item>

                      </ContainerBlock>
                      <ContainerBlock>
                          <RotuloDeCampo>Mínima</RotuloDeCampo>
                          <Form.Item  
                                  name="temperaturaMinima"
                                  rules={[{required:true, message: "Informe a temperatura."}]}
                              >
                              <CaixaImputFormatada 
                                  largura="90px"
                                  altura="40px"
                                  placeholder="Digite aqui"
                                  value={temperaturaMinima} 
                                  onChange={handleTemperaturaMinima}
                              />
                          </Form.Item>
                     </ContainerBlock>
                  </ContainerImputTemperaturas>

                </ContainerTemperaturas>

                <ContainerSelecioneTurno>
                    <ContainerTitulo>
                    <SubTitulo>Selecione o turno</SubTitulo>
                    </ContainerTitulo>
                    <RotuloDeCampo>Turno*</RotuloDeCampo>

      
                      <ContainerBotaoDeTurnos>
                          <Form.Item  
                            name="turnoSelecionado"
                            rules={[{required:true, message: "Informe o turno"}]}
                          >
                            <div>
                              <TurnoBotao  turno = "Manhã" onClick={()=> handleTurnoSelecionado("MANHA")}/>               
                              <TurnoBotao  turno = "Tarde" onClick={()=> handleTurnoSelecionado("TARDE")}/>               
                              <TurnoBotao  turno = "Noite" onClick={()=> handleTurnoSelecionado("NOITE")}/> 
                            </div>
                            </Form.Item>              
                      </ContainerBotaoDeTurnos>
                    
                </ContainerSelecioneTurno>
              
              </Container>
     
            <Container id='Clima'>
                <ContainerClimaInputs>

                    <SubTitulo>Informe o clima</SubTitulo>
                    
                    <InformeOClimaContainer>
                      <ContainerDeDados>
                          <ContainerClima>
                              <RotuloDeCampo>Clima*</RotuloDeCampo>

                              <Form.Item  
                                  name="clima"
                                  rules={[{required:true, message: "Selecione o clima."}]}
                              >
                                <SelectComponent placeholder="Ensolarado"
                                      value={clima}
                                      onChange={handleClimaSelecionado}
                                      options = {optionsList}
                                /> 
                                {/* </SelectComponent> */}
                              </Form.Item>
                          </ContainerClima>

                          <ContainerPrecipitacao>
                              <RotuloDeCampo>Precipitação*</RotuloDeCampo>

                              <Form.Item 
                                  name="precipitacao"
                                  rules={[{required:true, message: "Informe a precipitação."}]}
                              >
                                  <InputNumberCustomer placeholder="3mm"
                                      value={precipitacao}
                                      onChange={handlePrecipitacao}
                                  />
                              </Form.Item>

                          </ContainerPrecipitacao>
                          

                          <ContainerUmidade>

                              <RotuloDeCampo>Umidade*</RotuloDeCampo>

                              <Form.Item 
                                name="umidade"
                                rules={[{required:true, message: "Informe a umidade."}]}
                              >
                                  <InputNumberCustomer placeholder="3%"
                                      value={umidade}
                                      onChange={handleUmidade}
                                  />
                              </Form.Item>
                              
                          </ContainerUmidade>


                          <ContainerVelocidadeCoVento>
                            <RotuloDeCampo>Velocidade do vento*</RotuloDeCampo>
                            <Form.Item 
                              name="velocidadeDoVento"
                              rules={[{required:true, message: "Informe a velocidade do vento."}]}
                            >
                              <InputNumberCustomer placeholder="3 km/h"
                                  value={velocidadeDoVento}
                                  onChange={handleVelocidadeDoVento}
                              />
                            </Form.Item>
                          </ContainerVelocidadeCoVento>
                        

                      </ContainerDeDados>
                    </InformeOClimaContainer>
                    </ContainerClimaInputs>
            </Container>


            <Container id='Botoes'>
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
           </Form>
        </AreaDeDados>
        </>
    )
}
export default Formulario