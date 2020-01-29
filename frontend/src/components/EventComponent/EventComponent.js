import React from 'react';

import { Container } from './EventStyle';

export default function ErrorComponent({ event }) {
  return (
    <Container>
      <span>{event.codigo}</span>
      <span>{event.descricao}</span>
      <span>{event.eventos}</span>
    </Container>
  );
}
