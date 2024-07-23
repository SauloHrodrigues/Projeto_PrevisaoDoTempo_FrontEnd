
import styled from 'styled-components'
import Logo from '../Logo'
import React from 'react';

const HederContainer = styled.header`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: #414ABA;
  width: 100%;
  height: 70px;
  align-items: center;

`

function Header(){
    return(
    <HederContainer>
        <Logo/>
    </HederContainer>
    )
}
export default Header