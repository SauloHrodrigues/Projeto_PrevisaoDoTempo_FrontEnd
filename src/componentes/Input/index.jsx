import styled from "styled-components"

const CaixaInputFormatada = styled.input`
  width: ${props => props.largura || '90px'};
  height: ${props => props.altura || '36px'};
  border-radius: 6px;
  border: 2px solid #414aba;
`;
export default CaixaInputFormatada
