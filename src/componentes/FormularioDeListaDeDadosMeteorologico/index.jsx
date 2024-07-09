import React from "react";
import TabelaTeste from "../Tabela_teste";
import { AreaDeDados } from "../../AreaDeDados";
import { Titulo } from "../Titulo";
import BuscarCidade from '../BuscarCidade';
import styled from "styled-components";


const ContainerBuscarCidade = styled.section`
    width: auto;
    height: auto;
    margin-top: 16px;
`

function FormularioDeListaDeDadosMeteorologicos(){
    return( 
        <AreaDeDados>
          <Titulo>Lista de Dados Meteorológicos</Titulo>
          <ContainerBuscarCidade>
            <TabelaTeste/>
          </ContainerBuscarCidade>
          
          
        </AreaDeDados>
       
    )
}
export default FormularioDeListaDeDadosMeteorologicos;