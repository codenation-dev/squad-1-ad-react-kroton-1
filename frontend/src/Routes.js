import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Painel from './pages/Painel'
import Cadastro from './pages/Cadastro'



export default function Routes(){
    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/painel" component={Painel}></Route>
                <Route exact path="/cadastro" component={Cadastro}></Route>
                <Route exact path="/" component={Login}></Route>
            </Switch>  
        </BrowserRouter>

    )
}