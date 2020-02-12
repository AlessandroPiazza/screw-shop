import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '../../store/modules/auth/actions';
import { Container } from './styles';

const schema = Yup.object().shape({
    username: Yup.string().required('Username é obrigatório'),
    password: Yup.string().required('Senha é obrigatório'),
  })

 
export default function Login() {

  const dispatch = useDispatch();
  function handleSubmit({username, password}){
    dispatch(signInRequest(username, password))
  }

  return (
    <>
      <Container>
        
        <Form schema={schema} onSubmit={handleSubmit}>
        <h1>Login</h1>
          <Input name="username" type="text" placeholder="Seu username" />
          <Input name="password" type="password" placeholder="Sua senha" />
          <button type="submit" to="Home">Acessar</button>
          
        </Form>
      </Container>
    </>
  );
}
