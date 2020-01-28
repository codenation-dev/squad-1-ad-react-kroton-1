import React, { useState } from 'react'
import LogoComponent from '../../components/LogoComponent/LogoComponent'

import logoUser from '../../img/avatar.png'
import './NavbarContainer.css'


/*
 * Criado em: 15/01/20
 * Modificado em : 15/01/20
 * Container do Cabecalho da pagina do Painel
 */
function NavbarContainer() {

    const [nomeUser, setNomeUSer] = useState('Nome User')
    const [token, setToken] = useState('Token')

    return (
        <nav className="NavbarContainer">
            <LogoComponent small white />
            <div className="user-container">
            <div className="photo-nav ">
                <img src={logoUser} alt="avatar" width='50' height='50' />
            </div>
            <div className="dados-user-nav">
                <span>Olá {nomeUser}</span>
                <span>{token}</span>
            </div>
            </div>
           
        </nav>
    );
}

export default NavbarContainer;