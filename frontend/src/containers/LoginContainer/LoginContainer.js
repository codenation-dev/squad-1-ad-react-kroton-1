import React from "react";

import InputComponent from '../../components/InputComponent/InputComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import LogoComponent from '../../components/LogoComponent/LogoComponent'
import './LoginContainer.css'

/*
 * Criado em: 15/01/20
 * Modificado em : 15/01/20
 * Container dde Login do Inicio da Aplicação
 */

export default function LoginContainer(props) {
  return (
    <div className="LoginContainer">
        <LogoComponent />
       <form id="form-login">   
        <InputComponent type="text"  placeholder="Email"/>
        <InputComponent type="password" placeholder="Senha" />
        <ButtonComponent type="submit" value="Enviar" form="form-login" text="Login"/>
      </form>
    </div>
  );
}
