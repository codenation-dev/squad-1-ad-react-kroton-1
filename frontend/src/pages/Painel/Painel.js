import React, { useState } from 'react';
import { MdAdd, MdSearch, MdDeleteForever,MdExpandLess,MdExpandMore } from 'react-icons/md';

import { Container, Actions, TitleContainer, OpcaoAmbiente } from './PainelStyle';
import { ListContainer } from '../../containers';
import { Button, Input } from '../../components';

function Painel() {
  const [title, setTitle] = useState([]);

  return (
    <Container>
      <Actions>
        <Button type="submit" value="Apagar" text="Apagar" icon={<MdDeleteForever />} />

        <form>
          <MdSearch size={20} />
          <Input placeholder="Pesquisar" />
          <input type="submit" hidden />
        </form>

        <Button type="submit" value="Enviar" text="Incluir" icon={<MdAdd />} />


      </Actions>
      <OpcaoAmbiente>
          <Button type="submit" value="Enviar" text="Produção"/>
          <Button type="submit" value="Enviar" text="Homologação"/>
          <Button type="submit" value="Enviar" text="Dev"/>
      </OpcaoAmbiente>

      <TitleContainer>

          <span>

            Level
            <MdExpandLess type='submit'/>
            <MdExpandMore type='submit'/>
          </span>

          <span>

            Descrição
            <MdExpandLess type='submit'/>
            <MdExpandMore type='submit'/>
          </span>

          <span>
            Eventos
            <MdExpandLess type='submit'/>
            <MdExpandMore type='submit'/>
          </span>
      </TitleContainer>
      <ListContainer />
    </Container>
  );
}

export default Painel;
