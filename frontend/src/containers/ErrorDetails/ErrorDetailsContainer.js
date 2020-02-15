import React from 'react';
import { MdArrowBack, MdDeleteForever } from 'react-icons/md';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from '../../components';
import { Container, Header, Main, Footer } from './ErrorDetailStyle';

export default function ErrorDetailsContainer({ bug }) {
  const handleDelete = () => {
    toast.error('Função ainda não implementada');
  };

  return (
    <Container>
      <Header>
        <h1>{bug.log_title}</h1>
      </Header>

      <Main id="main">
        <h4>ID:</h4>
        <p>{bug.id}</p>
        <h4>Tipo:</h4>
        <p>{bug.log_type}</p>
        <h4>Descrição do Erro:</h4>
        <p>{bug.log_description}</p>
        <h4>Fonte:</h4>
        <p>{bug.log_source}</p>
        <h4>Quantidade de Eventos:</h4>
        <p>{bug.log_quantity}</p>
      </Main>

      <span>
        Data Criação: {moment(bug.createdAt).format('DD/MM/YYYY hh:mm')}
      </span>
      <span>Usuário: {bug.user.name}</span>
      <Footer id="footer">
        <Link to="/painel">
          <Button type="button" text="Voltar" icon={<MdArrowBack />} inverted />
        </Link>

        <Button
          type="button"
          text="Excluir"
          icon={<MdDeleteForever />}
          inverted
          onClick={handleDelete}
        />
      </Footer>
    </Container>
  );
}
