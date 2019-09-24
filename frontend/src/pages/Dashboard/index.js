import React, { Component } from 'react';
import { MdRepeat, MdFormatAlignLeft } from 'react-icons/md';

import Header from '../../components/Header';

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

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Header/>
        <Welcome>
          <h5>Welcome to Bank Ekki,</h5>
          <p>Alexandre Preczewski</p>
        </Welcome>
        <Balance>
          <Current>
            <h5>Your current balance</h5>
            <p>1.000,00</p>
          </Current>
          <Limit>
            <h5>Limit</h5>
            <p>500,00</p>
          </Limit>
        </Balance>
        <Account>
          <h5>Bank Ekki (2246)</h5>
          <Number>
            <p>Ag 0001</p>
            <p>|</p>
            <p>Number 02685454 - 5</p>
          </Number>
        </Account>
        <Details>
          <Transfer href="/transfer">
            <MdRepeat />
            <strong>Transfer</strong>
          </Transfer>
          <History href="/history">
            <MdFormatAlignLeft />
            <strong>History</strong>
          </History>
        </Details>
      </Container>
    );
  }
}

export default Dashboard;
