import React, { useState, useEffect } from 'react';
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
  const [filteredBugs, setFilteredBugs] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [levelOrder, setLevelOrder] = useState(true);
  const [descriptionOrder, setDescriptionOrder] = useState(true);
  const [eventsOrder, setEventsOrder] = useState(true);

  useEffect(() => {
    dispatch(listBugRequest());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    function loadBugs() {
      const s = new RegExp(search, 'i');
      setFilteredBugs(
        bugs
          .filter(bug => filter === '' || bug.log_environment === filter)
          .filter(
            bug =>
              bug.log_type.match(s) ||
              bug.log_title.match(s) ||
              bug.log_description.match(s) ||
              bug.log_quantity.match(s)
          )
        // .sort((a, b) =>
        //   levelOrder ? a.log_type - b.log_type : b.log_type - a.log_type
        // )
      );
    }

    loadBugs();
  }, [bugs, filter, levelOrder, search]);

  const handleSearch = e => {
    e.preventDefault();
  };

  return (
    <Container>
      <Actions>
        <Button
          type="submit"
          value="Apagar"
          text="Apagar"
          icon={<MdDeleteForever />}
        />

        <form onSubmit={handleSearch}>
          <MdSearch size={20} />
          <Input
            placeholder="Pesquisar"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <input type="submit" hidden />
        </form>

        <Button type="submit" value="Enviar" text="Incluir" icon={<MdAdd />} />
      </Actions>
      <OpcaoAmbiente>
        <Button
          type="button"
          text="Produção"
          className={filter === 'production' && 'active'}
          onClick={() => setFilter('production')}
        />
        <Button
          type="button"
          text="Homologação"
          className={filter === 'homologation' && 'active'}
          onClick={() => setFilter('homologation')}
        />
        <Button
          type="button"
          text="Dev"
          className={filter === 'development' && 'active'}
          onClick={() => setFilter('development')}
        />
      </OpcaoAmbiente>

      <TitleContainer>
        <span>
          <p>Level</p>
          <OrderButton
            type="button"
            icon={<MdExpandLess />}
            inverted={!levelOrder}
            onClick={() => setLevelOrder(!levelOrder)}
          />
          <OrderButton
            type="submit"
            icon={<MdExpandMore />}
            inverted={levelOrder}
            onClick={() => setLevelOrder(!levelOrder)}
          />
        </span>

        <span>
          <p>Descrição</p>
          <OrderButton
            type="submit"
            icon={<MdExpandLess />}
            inverted={!descriptionOrder}
            onClick={() => setDescriptionOrder(!descriptionOrder)}
          />
          <OrderButton
            type="submit"
            icon={<MdExpandMore />}
            inverted={descriptionOrder}
            onClick={() => setDescriptionOrder(!descriptionOrder)}
          />
        </span>

        <span>
          <p>Eventos</p>
          <OrderButton
            type="submit"
            icon={<MdExpandLess />}
            inverted={!eventsOrder}
            onClick={() => setEventsOrder(!eventsOrder)}
          />
          <OrderButton
            type="submit"
            icon={<MdExpandMore />}
            inverted={eventsOrder}
            onClick={() => setEventsOrder(!eventsOrder)}
          />
        </span>
      </TitleContainer>
      {loading ? (
        <Loading>Carregando...</Loading>
      ) : (
        <ListContainer list={filteredBugs} />
      )}
    </Container>
  );
}

export default Painel;
