import React from 'react';

import logo from '../../assets/lista.svg';
import { Container, StyledLink } from './styles';

export default function Header() {
  return (
    <Container>
      <div>
        <img src={logo} alt="Todo List" />
        <StyledLink to="/todo">Tarefas</StyledLink>
        <StyledLink to="/about">Sobre</StyledLink>
      </div>
    </Container>
  );
}
