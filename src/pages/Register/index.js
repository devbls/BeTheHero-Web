import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import {
  Container,
  ContainerContent,
  RegisterInfo,
  RegisterForm,
} from './styles';

import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';

export default function Register() {
  return (
    <Container>
      <ContainerContent>
        <RegisterInfo>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajuda pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar
          </Link>
        </RegisterInfo>
        <RegisterForm>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="WhatsApp" />
          <div>
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>
          <Button type="submit" title="Cadastrar" />
        </RegisterForm>
      </ContainerContent>
    </Container>
  );
}
