import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 600px;
  margin: 20px auto;
`;

const Texto = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
`;

const Botao = styled(Link)`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
`;

function Index() {
  return (
    <div>
      <h2>Página Inicial</h2>
      <GridContainer>
        <Texto>Texto 1</Texto>
        <Texto>Texto 2</Texto>
        <Texto>Texto 3</Texto>
        <Texto>Texto 4</Texto>
      </GridContainer>
      <Botao to="/app">Ir para App</Botao>
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
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();