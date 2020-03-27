import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import Button from '../../components/Button';

import { Container, FormSection, Form } from './styles';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Login() {
  return (
    <Container>
      <FormSection>
        <img src={logoImg} alt="Be The Hero" />

        <Form>
          <h1>Faça seu login</h1>
          <input placeholder="Sua ID" />
          <Button title="Entrar" />
          <a href="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </a>
        </Form>
      </FormSection>
      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
