import React from 'react';
import { MdRepeat, MdFormatAlignLeft } from 'react-icons/md';

// import api from '../../services/api';

import Account from '../../components/Account';
import { Container, Details, Transfer, History } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Account />
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
