import styled from "styled-components";
import { DatePicker } from "antd";
import { SubTitulo } from "../SubTitulo/SubTitulo";
import RotuloDeCampo from "../RotuloDeCampo"
import { useEffect, useState } from "react";
import React from 'react';

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

function SelecionarData({value, onInputChange}){
  const [dataSelecionada, setDataSelecionada] = useState(value || null);

  useEffect(()=> {
    setDataSelecionada(value || null);
  }, [value])

  const handleMudaData = (dateString, date)=> {
    setDataSelecionada(dateString);
    if(onInputChange){
      onInputChange(date, dateString);
    }
  }

    return(
        <SelecionarDataContainer>
              <SubTitulo>Selecione a data</SubTitulo>
              <RotuloDeCampo>Data</RotuloDeCampo>
              <DatePickerFormatado value={dataSelecionada}
                onChange={handleMudaData}
                format="YYYY-MM-DD"
              >
              </DatePickerFormatado>
             
        </SelecionarDataContainer>
    )
}
export default SelecionarData