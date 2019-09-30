import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAccountBalance } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';

import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Name incorrect, example: Spike'),
  cpf: Yup.string().required('CPF incorrect, example: 000 000 000 00'),
  phone: Yup.string().required('phone incorrect, example: 00 0000 0000'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, cpf, phone }) {
    dispatch(signUpRequest(name, cpf, phone));
  }

  return (
    <>
      <div>
        <MdAccountBalance />
        <strong>Bank Ekki</strong>
      </div>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          placeholder="Name"
          // value={username}
          // onChange={event => setUserName(event.target.value)}
        />
        <Input
          name="cpf"
          type="text"
          placeholder="CPF"
          // value={usercpf}
          // onChange={event => setUserCpf(event.target.value)}
        />
        <Input
          name="phone"
          type="text"
          placeholder="Phone"
          // value={userphone}
          // onChange={event => setUserPhone(event.target.value)}
        />
        <button type="submit">Confirm</button>
        <Link to="/">Back</Link>
      </Form>
    </>
  );
}
