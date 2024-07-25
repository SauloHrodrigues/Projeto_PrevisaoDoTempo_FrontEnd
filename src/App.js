
import Breadcrumb from './componentes/Breadcrumb';
import Header from './componentes/Header';
import FormularioDeListaDeDadosMeteorologico from './componentes/FormularioDeListaDeDadosMeteorologico';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import FormularioDeCadastro from './componentes/FormularioDeCadastro';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const AppContainer = styled.div` 
  
      width: 100%;
      height: 200vh;
      background-color: #fff;
    
    
    li {
      list-style: none;
    }
  `
// "test": "react-scripts test",

function App() {

  return (
    <Router>
      <AppContainer>
        <Header />
        {/* <Breadcrumb /> */}
        <Routes>
          <Route path='/' element={<FormularioDeCadastro/>} />
        </Routes>
        <Routes>
          <Route path='/cadastro/:id' element={<FormularioDeCadastro/>} />
        </Routes>
        <Routes>
          <Route path='/listardados' element={<FormularioDeListaDeDadosMeteorologico/>} />
        </Routes>
      </AppContainer>
      <Toaster/>
    </Router>


  );
}

export default App
