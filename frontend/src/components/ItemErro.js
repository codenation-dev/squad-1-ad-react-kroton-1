import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import itensErro from './ItemListErro';
import './itemErro.css'

function ItemErro()  {
    const listaItens = itensErro.map((itens) => 

        <ul className="item-list-erro jumbotron">
            <li>
                <span>{itens.codigo}</span>
                <span>{itens.descricao}</span>
                <span>{itens.eventos}</span>
            </li>
        </ul>

    )
    return (
        
        <div className="container">  
            {listaItens}
        </div>
       
    );
  
}
export default ItemErro
