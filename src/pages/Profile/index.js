import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

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
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  useEffect(() => {
    async function loadCases() {
      const response = await api.get('profile', {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(response.data);
    }

    loadCases();
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (err) {
      alert('Erro ao deletar caso,  tente novamente');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem-vinda, {ongName}</span>
        <Link to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </Header>
      <Title>Casos cadastrados</Title>
      <CasesList>
        {incidents.map((incident) => (
          <CasesListItem key={incident.id}>
            <CaseTitle>CASO:</CaseTitle>
            <p>{incident.title}</p>

            <CaseTitle>DESCRIÇÃO:</CaseTitle>
            <p>{incident.description}</p>

            <CaseTitle>VALOR:</CaseTitle>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>

            <button
              type="button"
              onClick={() => handleDeleteIncident(incident.id)}
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </CasesListItem>
        ))}
      </CasesList>
    </Container>
  );
}
