import React, { useEffect, useState } from 'react';
import {
  MdRepeat,
  MdFormatAlignLeft,
  MdPowerSettingsNew,
} from 'react-icons/md';

import api from '../../services/api';

import {
  Container,
  Balance,
  Welcome,
  Current,
  Limit,
  Account,
  Number,
  Details,
  Transfer,
  History,
} from './styles';

export default function Dashboard({ match }) {
  const [user, setUser] = useState({});
  const [account, setAccount] = useState({});
  const [limit, setLimit] = useState({});

  useEffect(() => {
    async function loadUser() {
      const response = await api.get(`/users/${match.params.id}`);

      setUser(response.data.user);
    }

    async function loadAccount() {
      const response = await api.get(`/accounts/${match.params.id}`, {});

      console.log(response.data);
      setAccount(response.data.account);
    }

    async function loadLimit() {
      const response = await api.get(`/limits/${match.params.id}`);

      console.log(response.data);
      setLimit(response.data.limit);
    }

    // loadUser();
    loadAccount();
    // loadLimit();
  }, [match.params.id]);

  return (
    <Container>
      <Welcome>
        <h5>Welcome to Bank Ekki,</h5>
        <p>{user.name}</p>
        <span>
          <MdPowerSettingsNew />
        </span>
      </Welcome>
      <Balance>
        <Current>
          <h5>Your current balance</h5>
          <p>{account.sum}</p>
        </Current>
        <Limit>
          <h5>Limit</h5>
          <p>{limit.value}</p>
        </Limit>
      </Balance>
      <Account>
        <h5>Bank Ekki</h5>
        <Number>
          <p>{`Ag ${account.ag}`}</p>
          <p>|</p>
          <p>{`Account ${account.number}`}</p>
        </Number>
      </Account>
      <Details>
        <Transfer to="/transfer">
          <MdRepeat />
          <strong>Transfer</strong>
        </Transfer>
        <History to="/history">
          <MdFormatAlignLeft />
          <strong>History</strong>
        </History>
      </Details>
    </Container>
  );
}
