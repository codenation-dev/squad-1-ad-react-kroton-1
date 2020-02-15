import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdAdd,
  MdSearch,
  MdDeleteForever,
  MdExpandLess,
  MdExpandMore,
} from 'react-icons/md';

import {
  Container,
  Actions,
  TitleContainer,
  OpcaoAmbiente,
  Loading,
} from './PainelStyle';
import { ListContainer } from '../../containers';
import { Button, Input, OrderButton } from '../../components';

import { listBugRequest } from '../../store/ducks/bug';

function Painel() {
  const loading = useSelector(state => state.bug.loading);
  const bugs = useSelector(state => state.bug.bugs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listBugRequest());
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Actions>
        <Button
          type="submit"
          value="Apagar"
          text="Apagar"
          icon={<MdDeleteForever />}
        />

        <form>
          <MdSearch size={20} />
          <Input placeholder="Pesquisar" />
          <input type="submit" hidden />
        </form>

        <Button type="submit" value="Enviar" text="Incluir" icon={<MdAdd />} />
      </Actions>
      <OpcaoAmbiente>
        <Button type="submit" value="Enviar" text="Produção" />
        <Button type="submit" value="Enviar" text="Homologação" />
        <Button type="submit" value="Enviar" text="Dev" />
      </OpcaoAmbiente>

      <TitleContainer>
        <span>
          Level
          <OrderButton type="submit" icon={<MdExpandLess />} inverted />
          <OrderButton type="submit" icon={<MdExpandMore />} inverted />
        </span>

        <span>
          Descrição
          <OrderButton type="submit" icon={<MdExpandLess />} inverted />
          <OrderButton type="submit" icon={<MdExpandMore />} inverted />
        </span>

        <span>
          Eventos
          <OrderButton type="submit" icon={<MdExpandLess />} inverted />
          <OrderButton type="submit" icon={<MdExpandMore />} inverted />
        </span>
      </TitleContainer>
      {loading ? (
        <Loading>Carregando...</Loading>
      ) : (
        <ListContainer list={bugs} />
      )}
    </Container>
  );
}

export default Painel;
