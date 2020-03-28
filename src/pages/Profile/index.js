import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import {
  Container,
  Header,
  Title,
  CasesList,
  CasesListItem,
  CaseTitle,
} from './styles';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem-vinda, APAD</span>
        <Link to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </Header>
      <Title>Casos cadastrados</Title>
      <CasesList>
        <CasesListItem>
          <CaseTitle>CASO:</CaseTitle>
          <p>Caso 1</p>

          <CaseTitle>DESCRIÇÃO:</CaseTitle>
          <p>Descrição 1</p>

          <CaseTitle>VALOR:</CaseTitle>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </CasesListItem>
        <CasesListItem>
          <CaseTitle>CASO:</CaseTitle>
          <p>Caso 1</p>

          <CaseTitle>DESCRIÇÃO:</CaseTitle>
          <p>Descrição 1</p>

          <CaseTitle>VALOR:</CaseTitle>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </CasesListItem>
        <CasesListItem>
          <CaseTitle>CASO:</CaseTitle>
          <p>Caso 1</p>

          <CaseTitle>DESCRIÇÃO:</CaseTitle>
          <p>Descrição 1</p>

          <CaseTitle>VALOR:</CaseTitle>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </CasesListItem>
      </CasesList>
    </Container>
  );
}
