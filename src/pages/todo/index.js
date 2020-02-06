/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

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

  async function handleDelete(id) {
    await api
      .delete(`/todo/${id}`)
      .then(() => {
        toast.success('removido com sucesso');
      })
      .catch(err => {
        toast.error(`erro ao remover: ${err}`);
      });
    window.location.reload(false);
  }
  return (
    <Container>
      <ListTodo>
        {todos.map(todo => (
          <li key={String(todo._id)}>
            <h1>{todo.description}</h1>
            <input type="checkbox" name="" id="" checked={todo.done} />
            <div>
              <Remove type="button" onClick={() => handleDelete(todo._id)}>
                remover
              </Remove>
              <Edit type="button">editar</Edit>
            </div>
          </li>
        ))}

        <StyledLink to="/register">ADICIONAR NOVA TAREFA</StyledLink>
      </ListTodo>
    </Container>
  );
}
