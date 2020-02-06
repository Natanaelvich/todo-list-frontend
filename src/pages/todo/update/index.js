/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import api from '../../../services/api';

import { Container } from './styles';

function Form({ history, location }) {
  const [description, setDescription] = useState(location.state.todo.description);
  const [done, setDone] = useState(location.state.todo.done);
  const id = location.state.todo._id;

  async function handleSubmit(e) {
    e.preventDefault();

    await api
      .put(`/todo/${id}`, {
        description,
        done,
      })
      .then(() => {
        toast.success('atualizado com sucesso');
      })
      .catch(err => {
        return toast.error(`Falha ao atualizar: ${err}`);
      });

    history.push('/todo');
  }
  return (
    <Container>
      <form action="" method="post" onSubmit={handleSubmit}>
        <label htmlFor="description">
          <span>Nova Descrição</span>
          <input
            name="description"
            type="text"
            value={description}
            onChange={txt => setDescription(txt.target.value)}
            checked={done}
          />
        </label>
        <div>
          <span>Completada</span>{' '}
          <input
            placeholder={description}
            type="checkbox"
            name="done"
            defaultChecked={done}
            value={done}
            onChange={e => {
              setDone(e.target.checked);
            }}
          />
        </div>
        <button type="submit">ATUALIZAR</button>
      </form>
    </Container>
  );
}

Form.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      todo: PropTypes.shape({
        description: PropTypes.string,
        done: PropTypes.bool,
        _id: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default Form;
