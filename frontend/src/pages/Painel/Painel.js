import React, { useState } from 'react';
import Main from '../../components/Main';

import { Container } from './PainelStyle';

function Painel() {
  const [title, setTitle] = useState([]);

  return (
    <Container>
      <Main />
    </Container>
  );
}

export default Painel;
