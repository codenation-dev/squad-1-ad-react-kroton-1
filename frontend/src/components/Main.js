import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { func } from 'prop-types';
import ItemListErro from './ItemListErro';
import itensErro from './ItemListErro';
import ItemErro from './ItemErro';
import './Main.css';

function Main() {
  return (
    <div className="container">
      <div className="main-erros-inside-painel">
        <span className="title-error" />
        <button>
          <span className="glyphicon glyphicon-plus">Incluir</span>
        </button>

        <form className="search-list-erro">
          <i className="glyphicon glyphicon-search" />
          <input className="inputPesquisar" placeholder="Pesquisar" />
        </form>

        <main id="list-erros">
          <ItemErro />
        </main>
      </div>
    </div>
  );
}

export default Main;
