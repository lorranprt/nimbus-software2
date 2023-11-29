import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';
import Header from './components/header'; 
import Historico from './Historico'



const StyledUl = styled.ul`
  margin-left : 15px;
  display : flex;
  flex-direction : column;

`;

const StyledLi = styled.li`
  margin : 5px;

`;

const H2 = styled.h2`
  margin-left: 20px;

`

const StyledH1 = styled.h1`
  margin-left: 20px;

`

const StyledP = styled.p`
margin-left: 20px;
font-size: 20px;

`

const StyledDiv = styled.div`
  
`



function Index() {
  return (
    <div>
      <Header/>
      <StyledDiv>
      <StyledH1>
        Projeto Front-End
      </StyledH1>
      <StyledP>
        O objetivo dessa página é propor um protótipo para o Histórico de Dados da empresa Nimbus Meteorologia.
      </StyledP>
      <H2>Grupo 4D:</H2>
      <StyledUl>
        <StyledLi>Guilherme Vallim</StyledLi>
        <StyledLi>Hannah Martins</StyledLi>
        <StyledLi>João Gois</StyledLi>
        <StyledLi>Lorran Porto</StyledLi>
      </StyledUl>
      </StyledDiv>
      
    </div>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/" element={<Index />} />
        <Route path="/Historico" element={<Historico />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();