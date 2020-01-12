import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import './painel.css'


function Painel()  {

  const [title,setTitle] = useState([])
  
  return (
    <div className="app">
      <Navbar></Navbar>
      <main className="jumbotron">
        <div className="main-painel-erros">
          <div className="main-painel-erros">
            <Main title={setTitle}></Main>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Painel