import React from 'react';

import { MdSend } from 'react-icons/md';

import { Container, Auth } from './styles';

export default function Search({ link }) {
  return (
    <Container>
      <input placeholder="CPF" />
      <Auth href={link}>
        <MdSend size={20} />
      </Auth>
    </Container>
  );
}
