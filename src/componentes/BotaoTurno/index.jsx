import styled from "styled-components";

const BotaoTurno = styled.button`
    width: 75px;
    height: 40px;
    padding: 4px 15px 4px 15px ;
    border-radius: 6px;
    border: none;
      justify-content: center;
    background-color: #BEE7F9;  
    
    
`
const RotuloFormatado = styled.h5`
        width: 57px;
        height: 22px;
        padding:0 ;
        margin: 0;
        font-family: TT-Supermolot-Bold;
        font-size: 18px;      
        font-weight: 400;
        line-height: 22.23px;
        color: #221F52;
        
       
`

function TesteBotaoTurno({rotulo}){
    return(
        <BotaoTurno>
            <RotuloFormatado>{rotulo}</RotuloFormatado>
        </BotaoTurno>
    )
}
export default TesteBotaoTurno