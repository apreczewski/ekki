import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import api from '../../services/api';

import {
  Container,
  Balance,
  Welcome,
  Current,
  Limit,
  Account,
  Number,
} from './styles';

export default function Header() {
  const [account, setAccount] = useState({});
  const [limit, setLimit] = useState({});
  const profile = useSelector(state => state.user.profile);

  useEffect(() => {
    async function loadAccount() {
      const response = await api.get('accounts');
      setAccount(response.data);
    }

    async function loadLimit() {
      const response = await api.get('limit', {
        id: account.limit_id,
      });

      setLimit(response.data);
    }

    loadAccount();
    loadLimit();

  }, [account, setAccount]);

  return (
    <Container>
      <Welcome>
        <h5>Welcome to Bank Ekki,</h5>
        <strong>{profile.name}</strong>
      </Welcome>
      <Balance>
        <Current>
          <h5>Your current balance</h5>
          <p>{`$ ${account.sum}`}</p>
        </Current>
        <Limit>
          <h5>Limit</h5>
          <p>{`$ ${limit.value}`}</p>
        </Limit>
      </Balance>
      <Account>
        <h5>Bank Ekki</h5>
        <Number>
          <p>Ag 5551</p>
          <p>|</p>
          <p>Account 455548-5</p>
        </Number>
      </Account>
    </Container>
  );
}
