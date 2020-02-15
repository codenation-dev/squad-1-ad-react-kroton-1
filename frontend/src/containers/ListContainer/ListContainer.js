import React from 'react';

import { Container } from './ListStyle';
import { Event } from '../../components';

export default function ListContainer({ list = [] }) {
  return (
    <Container>
      {list.map(event => (
        <Event key={event.id} event={event} />
      ))}
    </Container>
  );
}
