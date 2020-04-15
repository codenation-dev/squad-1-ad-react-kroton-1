import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './EventStyle';

export default function ErrorComponent({ event }) {
  return (
    <Container>
      <Link to={`error/${event.id}`}>
        <p className="left">{event.log_type}</p>
        <p className="center">
          <b>{event.log_title}</b> - {event.log_description}
        </p>
        <p className="right">{event.quantity}</p>
      </Link>
    </Container>
  );
}
