import logo from '../../imagens/logo_db.png'
import styled from 'styled-components'


const LogoContainer =styled.div`
    display: flex;
    font-size: 30px;
    width: 76px;
    height: 34px;
    top: 18px;
    margin-left: 120px;
    align-items: center;
`
const LogoImg = styled.img`
width: 100%;
height: auto;

`

function Logo(){
    return(
        <LogoContainer>
          <LogoImg src={logo} alt= 'logo do site' ></LogoImg>
        </LogoContainer>
    )


}
export default Logo