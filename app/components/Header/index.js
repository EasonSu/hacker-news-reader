import React from 'react';
import styled from 'styled-components';
import { layout } from 'style/constants';

import Logo from './Logo';

const Wrapper = styled.div`
  background-color: #f60;
`;
const HeaderContainer = styled.header`
  display: flex;
  max-width: ${layout.appMaxWidth};
  margin: 0 auto;
`;
const Title = styled.h1`
  margin: .25em 0 .25em .25em;
  font-size: 1.5em;
`;

const Header = () => (
  <Wrapper>
    <HeaderContainer>
      <Logo />
      <Title>Hacker News Reader</Title>
    </HeaderContainer>
  </Wrapper>
);

export default Header;
