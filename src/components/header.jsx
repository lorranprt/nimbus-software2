import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  width: auto;
  height: auto;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <img src={ require('./assets/logoNimbus.png') } />
    </HeaderContainer>
  );
};

export default Header;