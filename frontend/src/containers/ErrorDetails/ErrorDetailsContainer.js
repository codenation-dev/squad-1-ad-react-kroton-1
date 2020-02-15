import React, { useState, useEffect } from 'react';
import { MdArrowBack, MdClose,MdDeleteForever } from 'react-icons/md';
import { Button } from '../../components';
import { Container } from './ErrorDetailStyle';
import history from '../../services/history'
import api from '../../services/api'

export default function ErrorDetailsContainer() {

  const [logDetails, setLogDetails] = useState([])

  const url = window.location.href.split('/')
  const logId = url[4]
  console.log(logId)


  useEffect(async () => {

    const res = await api.get(`/error/id/${logId}`)

    setLogDetails(res)

  },[])


  async function handleClickBack(){
    await history.push('/painel')
  }

  return (
    <Container>
      <header id='header'>

        <div id='title'>
          <span>Id do Log</span>
          <span>Usuário: Paulo Beluci</span>
        </div>
        <div id='button-exit'>
          <Button
            type="submit"
            value="voltar"
            text=""
            icon={<MdClose />}
            inverted
            onClick={handleClickBack}      
          /> 
        </div>
        </header>
        
        <main id='main'>
          <p>Id</p>
          <p>fdsjlkfjfsjfkdsjflks;jfsd
          </p>
          <p>Tipo</p>
          <p>Warning</p>
          <p>Descrição</p>
          <p>fdsjlkfjfsjfkdsjflks;jfsd</p>        
        </main>

        <footer id='footer'>
          <div id='group-button'>
            <Button
            type="submit"
            value="voltar"
            text="Voltar"
            icon={<MdArrowBack />}
            inverted
            onClick={handleClickBack}
            />
            <Button
            type="submit"
            value="delete"
            text="Excluir"
            icon={<MdDeleteForever />}
            inverted
            />
          </div>
          <span id='data-criacao'>Data Criação: 2019/20/20 - 20:10:20</span>
        </footer>
        
    </Container>
  );
}
