import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  text-align: center;
  width: 100%;
  height: 100px;
  display: flex;
  border-style: groove;
  background-color: white;
`;

const Botao = styled(Link)`
  background-color:  rgb(57, 68, 128);
  color: #fff;
  padding: 10px;
  text-decoration: none;
  border-radius: 5px;
  height: 30px;
  margin-left: 25px;
  margin-top: 25px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <img src={ require('./assets/logoNimbus.png') } style={{ width: '200px', height: '100px', objectFit: 'contain' }} />
      <Botao to="/">Ir para Home</Botao>
      <Botao to="/app">Ir para App</Botao>
      <Botao to="/Historico">Histórico de Dados</Botao>
    </HeaderContainer>
  );
};


export default Header;