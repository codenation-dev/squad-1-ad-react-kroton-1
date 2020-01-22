import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarContainer } from '../../containers';
// import { Main } from '../../components/Main';
import './painel.css';

function Painel() {
  const [title, setTitle] = useState([]);

  return (
    <div className="app">
      <NavbarContainer />
      <main className="jumbotron">
        <div className="main-painel-erros">
          <div className="main-painel-erros">
            {/* <Main title={setTitle} /> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Painel;
