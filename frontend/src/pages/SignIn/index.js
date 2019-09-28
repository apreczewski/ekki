import React from 'react';
import { Link } from 'react-router-dom';
import { MdAccountBalance } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  cpf: Yup.number().required('CPF incorrect, example: 00000000000'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <div>
        <MdAccountBalance />
        <strong>Bank Ekki</strong>
      </div>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="cpf"
          type="text"
          placeholder="CPF"
          // value={cpf}
          // onChange={event => setCpf(event.target.value)}
        />
        <button type="submit">Confirm</button>
        <Link to="/signup">Create Account</Link>
      </Form>
    </>
  );
}
