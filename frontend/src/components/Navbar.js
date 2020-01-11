import React, {useState} from 'react'
import logoUser from '../img/avatar.png'
import './navbar.css'

function Navbar()  {
    
  const [nomeUser, setNomeUSer] = useState('Nome User')
  const [token, setToken] = useState('Token')

  return (
    <nav className="navbar">
        <div className="app-nav col">
            <div className="photo-nav col col-lg-1">
                <img src={logoUser} alt="avatar" width='50' height='50'/>
            </div>
            <div className="dados-user-nav col col-lg-4">
                <span>Olá {nomeUser}</span>
                <span>{token}</span>
            </div>
            <div className="title-nav col col-lg-6">
                CENTRAL DE ERROS
            </div>
        </div>
      
    </nav>
  );
}

export default Navbar