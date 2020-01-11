import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import ItemListErro from './ItemListErro'
import itensErro from './ItemListErro'
import ItemErro from './ItemErro'
import { func } from 'prop-types';
import './Main.css'


function Main()  {


  return (

    <div className="container">

        <div className="main-erros-inside-painel">

            <span className="title-error"></span>
            <button ><span className="glyphicon glyphicon-plus">Incluir</span></button>
            
            <form className="search-list-erro">

                <i className="glyphicon glyphicon-search"></i>
                <input className='inputPesquisar' placeholder="Pesquisar"/>

            </form>

            <main id="list-erros">
                <ItemErro></ItemErro>
            </main>
        </div>
        
    </div>    
  );
}

export default Main
