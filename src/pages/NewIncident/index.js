import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import {
  Container,
  ContainerContent,
  NewIncidentInfo,
  NewIncidentForm,
} from './styles';

import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';

export default function NewIncident() {
  return (
    <Container>
      <ContainerContent>
        <NewIncidentInfo>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para página principal
          </Link>
        </NewIncidentInfo>
        <NewIncidentForm>
          <input placeholder="Título do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor" />
          <Button type="submit" title="Cadastrar" />
        </NewIncidentForm>
      </ContainerContent>
    </Container>
  );
}
