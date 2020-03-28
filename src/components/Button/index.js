/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';

import { Container } from './styles';

export default function Button({ title, type }) {
  return (
    <Container>
      <button type={type}>{title}</button>
    </Container>
  );
}
