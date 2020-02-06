/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { Container, ListTodo, StyledLink, Remove, Edit } from './styles';

export default function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function loadTodos() {
      const response = await api.get('/todo');
      setTodos(response.data);
    }
    loadTodos();
  }, []);
  return (
    <Container>
      <ListTodo>
        {todos.map(todo => (
          <li key={String(todo._id)}>
            <h1>{todo.description}</h1>
            <input type="checkbox" name="" id="" checked={todo.done} onChange={txt => {}} />
            <div>
              <Remove type="button">remover</Remove>
              <Edit type="button">editar</Edit>
            </div>
          </li>
        ))}

        <StyledLink to="/register">ADICIONAR NOVA TAREFA</StyledLink>
      </ListTodo>
    </Container>
  );
}
