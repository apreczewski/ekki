import React, { useState } from 'react';
import { MdAccountBalance } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import api from '../../services/api';

export default function CreateUser({ history }) {
  const [username, setUserName] = useState('');
  const [usercpf, setUserCpf] = useState('');
  const [userphone, setUserPhone] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/users', {
      name: username,
      cpf: usercpf,
      phone: userphone,
    });

    const { id } = response.data;

    history.push(`/dashboard${id}`);
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
          placeholder="Name"
          value={username}
          onChange={event => setUserName(event.target.value)}
        />
        <input
          type="text"
          placeholder="CPF"
          value={usercpf}
          onChange={event => setUserCpf(event.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={userphone}
          onChange={event => setUserPhone(event.target.value)}
        />
        <button type="submit">Go</button>
        <Link to="/">Back</Link>
      </form>
    </Container>
  );
}
