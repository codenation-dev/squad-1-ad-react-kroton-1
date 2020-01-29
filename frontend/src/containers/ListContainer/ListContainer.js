import React from 'react';

import { Container } from './ListStyle';
import { Event } from '../../components';

import events from '../../erros';

export default function ListContainer() {
  return (
    <Container>
      {events.map(event => (
        <Event key={event.id} event={event} />
      ))}
    </Container>
  );
}
