import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  width: 400px;
  height: 200px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <img src={ require('./assets/logoNimbus.png') } style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </HeaderContainer>
  );
};

export default Header;