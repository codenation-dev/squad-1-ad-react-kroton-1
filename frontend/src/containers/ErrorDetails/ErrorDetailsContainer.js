import React from 'react';
import { Event } from '../../components';
import { Container } from './ErrorDetailStyle';
import { MdAdd, MdSearch, MdDeleteForever,MdExpandLess,MdExpandMore, MdArrowBack, MdClose} from 'react-icons/md';

import {ButtonInverted} from '../../components'

import events from '../../erros';

export default function ErrorDetailsContainer(){

  return (
    <Container>
      <div>
          <ButtonInverted type="submit" value="voltar" text="" icon={<MdClose/>}/>
          <p>Id do ERRO</p>
          <p>Descrição do Erro</p>
          <ButtonInverted type="submit" value="voltar" text="Voltar" icon={<MdArrowBack />}/>
      </div>
    </Container>
  );
}
