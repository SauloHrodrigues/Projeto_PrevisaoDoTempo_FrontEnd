
import Breadcrumb from './componentes/Breadcrumb';
import Header from './componentes/Header';
import Fomulario from './componentes/Formulario';

import styled from 'styled-components';

    const AppContainer = styled.div` 
  
      width: 100%;
      height: 200vh;
      background-color: #fff;
    
    
    li {
      list-style: none;
    }
  `

function App() {

  return (
    <AppContainer>
      <Header/>
     <Breadcrumb/>
     <Fomulario />
    </AppContainer>
  );
}

export default App
