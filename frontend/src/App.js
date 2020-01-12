import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import './app.css'
import './components/Main.css'


function App()  {

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

export default App