import React from 'react'
import {useState} from 'react'
import fotoLogo from '../img/avatar.png'
import './cadastro.css'

export default function Cadastro({history}){
    
    const [titulo,setTitulo] = useState('Cadastro')

    function handleSubmit(e){

        e.preventDefault()

        history.push('/login')

    }
    return (

        <div className="cadastro-container">
            <form className='jumbotron'>
                <h3>{titulo}</h3>
                <input placeholder="Digite seu e-mail"></input>
                <input placeholder="Crie uma senha" type="password"></input>
                <button type="submit" onClick={handleSubmit}>Cadastrar</button> 
                <a href='/login'>Já sou cadastrado</a>   
            </form>

        </div>

    )


}