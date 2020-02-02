import React from 'react';

import { Container,TitleContainer } from './EventStyle';

export default function ErrorComponent({ event }) {
  return (

      <Container>
        <input type='checkbox'></input>
        <span>{event.level}</span>
        <span>{event.descricao}</span>
        <span>{event.eventos}</span>
      </Container>

  );
}
