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


  useEffect(async () => {

    const res = await api.get(`/error/${logId}`)

    setLogDetails(res)

    console.log(logDetails.log_id)

  },[])


  function handleClickBack(){
    history.push('/painel')
  }

  async function handleDelete(){

    const reqDelete = await api.put(`/logs/${logId}`)
    history.push('/painel')

  }

  return (
    <Container>
      <header id='header'>

        <div id='title'>
          <span>{logDetails.log_environment}</span>
          <span>{logDetails.user}</span>
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
          <p>{logDetails.log_id}
          </p>
          <p>Tipo</p>
          <p>{logDetails.log_type}</p>
          <p>Descrição</p>
          <p>{logDetails.log_description}</p>        
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
            onClick={handleDelete}
            />
          </div>
          <span id='data-criacao'>Data Criação: 2019/20/20 - 20:10:20</span>
        </footer>
        
    </Container>
  );
}
