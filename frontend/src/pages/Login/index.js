import React, { useState } from 'react';
import { MdAccountBalance } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import api from '../../services/api';

export default function Login({ history }) {
  const [usercpf, setUserCpf] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', {
      cpf: usercpf,
    });

    history.push('/dashboard');
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div>
          <MdAccountBalance />
          <strong>Bank Ekki</strong>
        </div>
        <input
          type="text"
          placeholder="CPF"
          value={usercpf}
          onChange={event => setUserCpf(event.target.value)}
        />
        <button type="submit">Go</button>
        <Link to="/createuser">Create Account</Link>
      </form>
    </Container>
  );
}
