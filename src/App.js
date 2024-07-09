
import Breadcrumb from './componentes/Breadcrumb';
import Header from './componentes/Header';
import FormularioDeListaDeDadosMeteorologico from './componentes/FormularioDeListaDeDadosMeteorologico';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import FormularioDeCadastro from './componentes/FormularioDeCadastro';

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
    <Router>
      <AppContainer>
        <Header />
        <Breadcrumb />
        <Routes>
          <Route path='/' element={<FormularioDeCadastro/>} />
        </Routes>
        <Routes>
          <Route path='/listardados' element={<FormularioDeListaDeDadosMeteorologico/>} />
        </Routes>
      </AppContainer>
    </Router>


  );
}

export default App
