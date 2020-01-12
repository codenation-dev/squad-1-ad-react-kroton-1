import React from 'react'
import {useState} from 'react'
import fotoLogo from '../img/avatar.png'
import './login.css'


export default function Login({history}){
    
    const [titulo,setTitulo] = useState('Login')

    function handleSubmit(e){
        e.preventDefault()

        history.push('/painel')

    }


    return (
        

        <div className="login-container">
            <form className='jumbotron'>
                <h3>{titulo}</h3>
                <input placeholder="Digite o e-mail cadastrado"></input>
                <input placeholder="Digite sua senha"></input>
                <button type="submit" onClick={handleSubmit}>Login</button>
                <a href=''>Esqueci minha senha</a>
               
            </form>

        </div>

    )


}