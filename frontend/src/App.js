import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import './components/Main.css'


function App()  {

  const titles = ["Produção","Homologação","Dev"]
  const MostraPainel = titles.map((title) => (
    <Main>{title.titles}</Main>
  ))
  return (
    <div className="app">
      <Navbar></Navbar>
      <main className="jumbotron">
        <div className="main-painel-erros">
          <div className="main-painel-erros">
            {MostraPainel}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App