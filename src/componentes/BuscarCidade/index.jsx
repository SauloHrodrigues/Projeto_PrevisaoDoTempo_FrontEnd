import styled from "styled-components";
import { SubTitulo } from "../SubTitulo/SubTitulo";
import RotuloDeCampo from "../RotuloDeCampo"
import {SearchOutlined} from "@ant-design/icons"
import { Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react';


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


function BuscarCidade({value, onInputChange, disabilit}){
  const [cidadeBuscada, setCidadeBuscada] = useState(value || null);

  useEffect(()=> {
    setCidadeBuscada(value || null);
    console.log('Capitura cidade = '+ value);
  }, [value])

  const capturaCidade =(evento) =>{
    
    const valor = evento.target.value;
   
    setCidadeBuscada(valor);
    if(onInputChange){
      onInputChange(valor);
    }
    

   }
  
    return(
        <BuscarCidadeContainer>

          <SubTitulo>Buscar Cidade</SubTitulo>

          <label>
            <RotuloDeCampo>
                Buscar Cidade
            </RotuloDeCampo>
          </label>
            
              <CidadeInput 
                  type="search" 
                  placeholder="Digite o nome da cidade"
                  suffix={<Lupa /> } 
                  value={cidadeBuscada} 
                  onChange={capturaCidade}
                  disabled = {disabilit}
                  />
                  
                  
        </BuscarCidadeContainer>
        
    )
}
export default BuscarCidade