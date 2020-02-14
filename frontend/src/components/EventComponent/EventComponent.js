import React from 'react';

import { Container } from './EventStyle';

export default function ErrorComponent({ event }) {
  return (
    <Container>
      <input type="checkbox" />
      <span>{event.log_type}</span>
      <span>
        {event.log_title} - {event.log_description}
      </span>
      <span>{event.quantity}</span>
    </Container>
  );
}
