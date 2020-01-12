import React from 'react'
import {useState} from 'react'
import fotoLogo from '../img/avatar.png'
import './login.css'


export default function Login(){
    
    const [titulo,setTitulo] = useState('Login')

    return (
        

        <div className="login-container">
            <form className='jumbotron'>
                <h3>{titulo}</h3>
                <input placeholder="Digite o e-mail cadastrado"></input>
                <input placeholder="Digite sua senha"></input>
                <button type="submit">Login</button>
                <a href='#'>Esqueci minha senha</a>
               
            </form>

        </div>

    )


}