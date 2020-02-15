import React, { useState, useEffect } from 'react';
import history from '../../services/history'

import { Container } from './EventStyle';

import api from '../../services/api'



export default function ErrorComponent({ event }) {

  const [logs, setLogs] = useState([])
  const [exibeModal,setExibeModal] = useState(false) 

  useEffect(async () => {

    const res = await api.get('/logs')

    setLogs(res.data)

    console.log(logs)
  },[])

  function handleClick(logIn){
    
    history.push(`/error/${logIn.id}`)

  }


  const itens = logs.map((l) => (
      <Container onClick={(e) => handleClick(l)}>
        <input type="checkbox" />
        <span>{l.log_type}</span>
        <span>
          {l.log_title} - {l.log_description}
        </span>
        <span>{l.quantity}</span>
      </Container>
    )
  )


  return (
    <>
      {itens}
    </>
  );
}
