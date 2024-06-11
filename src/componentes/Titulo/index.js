import styled from "styled-components";

export const Titulo = styled.span`
        width: 100%;
        padding: 0;
        background-color: #FFF;
        color: ${props => props.cor || '#000'};
        font-size:${props => props.tamanhoFonte || '18px'};
        text-align: ${props => props.alinhamento || 'left'}; 
        margin: 40px 0 0 0;
`