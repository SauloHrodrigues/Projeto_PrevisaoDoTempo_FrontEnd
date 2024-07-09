import styled from 'styled-components';
import { Button, Flex } from 'antd';
import { hover } from '@testing-library/user-event/dist/hover';

export const BotaoEstilizado = styled.button`
    width: ${props => props.largura || '201px'};
    height: 40px;
    border-radius:2px;
    gap: 8px;
    border: 1px solid #414ABA;
    padding: 6.4px 15px 6.4px 15px;
    margin-right: 3px;
    background-color: ${props => props.corDeFundo || '#FFFFFF'};
    color:  ${props => props.corDaLetra || '#414ABA'};
    font-family: TT-Supermolot-Bold;
    font-size: 18px;
    font-weight: 400;
    line-height: 22.23px;
    &:hover{ 
    }
`