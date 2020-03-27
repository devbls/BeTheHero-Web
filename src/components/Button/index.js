/* eslint-disable react/prop-types */
import React from 'react';

import { Container } from './styles';

export default function Button({ title }) {
  return (
    <Container>
      <button type="submit">{title}</button>
    </Container>
  );
}
