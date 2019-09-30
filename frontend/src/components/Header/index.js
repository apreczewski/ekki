import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { MdAccountBalance, MdPowerSettingsNew } from 'react-icons/md';
import Notifications from '../Notifications';
import { signOut } from '../../store/modules/auth/actions';

import { Container, UserAuth, Content } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <MdAccountBalance />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <UserAuth>
            <button type="submit" onClick={handleSignOut}>
              <MdPowerSettingsNew />
            </button>
          </UserAuth>
        </aside>
      </Content>
    </Container>
  );
}
