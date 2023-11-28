import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  text-align: center;
  width: 400px;
  height: 200px;
`;

const Botao = styled(Link)`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <img src={ require('./assets/logoNimbus.png') } style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      <Botao to="/">Ir para Home</Botao>
    </HeaderContainer>
  );
};

export default Header;