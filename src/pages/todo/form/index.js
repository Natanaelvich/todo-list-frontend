import React from 'react';

import { Container } from './styles';

export default function Form() {
  return (
    <Container>
      <form action="" method="post">
        <label htmlFor="description">
          <span>Descrição</span>
          <input name="description" type="text" />
        </label>
        <div>
          <span>Completada</span> <input type="checkbox" name="done" />
        </div>
      </form>
    </Container>
  );
}
