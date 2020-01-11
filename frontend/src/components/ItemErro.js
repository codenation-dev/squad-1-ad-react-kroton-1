import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import itensErro from './ItemListErro';
import './itemErro.css'

function ItemErro()  {
    const listaItens = itensErro.map((itens) => 

        <div className="item-list-erro">
            <span>{itens.codigo}</span>
            <span>{itens.descricao}</span>
        </div>

    )
    return (
        
        <div className="container">  
            {listaItens}
        </div>
       
    );
  
}
export default ItemErro
