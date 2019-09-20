import React from 'react';
import { Link } from 'react-router-dom';

import { MdAccountBalance, MdPowerSettingsNew } from 'react-icons/md';

import { Container, UserAuth } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <MdAccountBalance size={30} />
        <h4>Bank Ekki</h4>
      </Link>
      <UserAuth>
        <MdPowerSettingsNew />
        <h4>Logout</h4>
      </UserAuth>
    </Container>
  );
}
