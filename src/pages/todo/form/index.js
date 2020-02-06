import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import api from '../../../services/api';

import { Container } from './styles';

function Form({ history }) {
  const [description, setDescription] = useState('');
  const [done, setDone] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    await api
      .post('/todo', {
        description,
        done,
      })
      .then(() => {
        toast.success('added sucess');
      })
      .catch(err => {
        toast.error(err);
      });

    history.push('/todo');
  }
  return (
    <Container>
      <form action="" method="post" onSubmit={handleSubmit}>
        <label htmlFor="description">
          <span>Descrição</span>
          <input
            name="description"
            type="text"
            value={description}
            onChange={txt => setDescription(txt.target.value)}
          />
        </label>
        <div>
          <span>Completada</span>{' '}
          <input
            type="checkbox"
            name="done"
            value={done}
            onChange={e => {
              setDone(e.target.checked);
            }}
          />
        </div>
        <button type="submit">SALVAR</button>
      </form>
    </Container>
  );
}

Form.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Form;
