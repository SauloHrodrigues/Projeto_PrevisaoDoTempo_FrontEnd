import React from "react";
import Tabela from "../Tabela";
import { AreaDeDados } from "../../AreaDeDados";
import { Titulo } from "../Titulo";

import styled from "styled-components";
import CustomBreadcrumb from "../Breadcrumb";



const ContainerBuscarCidade = styled.section`
    width: auto;
    height: auto;
    margin-top: 16px;

`

function FormularioDeListaDeDadosMeteorologicos(){
    return( 
      <>
       <CustomBreadcrumb rota={"Lista de dados meteorologicos" } />
      
        <AreaDeDados>
          <Titulo>Lista de Dados Meteorológicos</Titulo>
          <ContainerBuscarCidade>
            <Tabela/>
            
          </ContainerBuscarCidade>
        </AreaDeDados>
        </>
    )
}
export default FormularioDeListaDeDadosMeteorologicos;