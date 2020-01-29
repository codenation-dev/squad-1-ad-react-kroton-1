import React, { useState } from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';

import { Container, Actions } from './PainelStyle';
import { ListContainer } from '../../containers';
import { Button, Input } from '../../components';

function Painel() {
  const [title, setTitle] = useState([]);

  return (
    <Container>
      <Actions>
        <Button type="submit" value="Enviar" text="Incluir" icon={<MdAdd />} />
        <form>
          <MdSearch size={20} />
          <Input placeholder="Pesquisar" />
          <input type="submit" hidden />
        </form>
      </Actions>

      <ListContainer />
    </Container>
  );
}

export default Painel;
