import styled from "styled-components";
import { SubTitulo } from "../SubTitulo/SubTitulo";
import RotuloDeCampo from "../RotuloDeCampo"
import BotaoTurno from "../BotaoTurno";


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

function SelecioneTurno(){
    return(
        <ContainerSelecioneTurno>
            <ContainerTitulo>
            <SubTitulo>Selecione o turno</SubTitulo>
            </ContainerTitulo>
            <RotuloDeCampo>Turno*</RotuloDeCampo>
            <ContainerDeTurnos>
                <BotaoTurno rotulo = {"manha"}/>               
                <BotaoTurno rotulo = {"tarde"}/>               
                <BotaoTurno rotulo = {"noite"}/>               
            </ContainerDeTurnos>
        </ContainerSelecioneTurno>

    )
}
export default SelecioneTurno