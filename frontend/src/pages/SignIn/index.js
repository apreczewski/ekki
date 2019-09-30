import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAccountBalance } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  cpf: Yup.string().required('CPF incorrect, example: 00000000000'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ cpf }) {
    dispatch(signInRequest(cpf));
  }

  return (
    <>
      <div>
        <MdAccountBalance />
        <strong>BANK EKKI</strong>
      </div>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="cpf" type="text" placeholder="CPF" />
        <button type="submit">{loading ? 'Loading...' : 'Confirm'}</button>
        <Link to="/signup">Create Account</Link>
      </Form>
    </>
  );
}
