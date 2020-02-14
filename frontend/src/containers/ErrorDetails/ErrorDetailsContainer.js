import React from 'react';
import { MdArrowBack, MdClose } from 'react-icons/md';
import { Button } from '../../components';
import { Container } from './ErrorDetailStyle';

export default function ErrorDetailsContainer() {
  return (
    <Container>
      <div>
        <Button
          type="submit"
          value="voltar"
          text=""
          icon={<MdClose />}
          inverted
        />
        <p>Id do ERRO</p>
        <p>Descrição do Erro</p>
        <Button
          type="submit"
          value="voltar"
          text="Voltar"
          icon={<MdArrowBack />}
          inverted
        />
      </div>
    </Container>
  );
}
