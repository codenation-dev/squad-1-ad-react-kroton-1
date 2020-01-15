import React from "react";

import InputComponent from '../../components/InputComponent/InputComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import logo from '../../img/icon.png'
import './LoginContainer.css'

/*
 * Criado em: 15/01/20
 * Modificado em : 15/01/20
 * Container dde Login do Inicio da Aplicação
 */

export default function LoginContainer(props) {
  return (
    <div className="LoginContainer">
        <img src={logo} alt="logo"/>
       <form id="form-login">   
        <InputComponent type="text"  placeholder="Email"/>
        <InputComponent type="password" placeholder="Senha" />
        <ButtonComponent type="submit" value="Enviar" form="form-login" text="Login"/>
      </form>
    </div>
  );
}
