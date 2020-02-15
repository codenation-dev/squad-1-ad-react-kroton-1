import React, { useState } from 'react';
import history from '../../services/history';

import { Container } from './EventStyle';

export default function ErrorComponent({ event }) {
  const [exibeModal, setExibeModal] = useState(false);

  function handleClick(logIn) {
    history.push(`/error/${logIn.id}`);
  }

  return (
    <Container onClick={e => handleClick(e)}>
      <input type="checkbox" />
      <span>{event.log_type}</span>
      <span>
        {event.log_title} - {event.log_description}
      </span>
      <span>{event.quantity}</span>
    </Container>
  );
}
