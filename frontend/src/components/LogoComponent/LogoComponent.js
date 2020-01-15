import React from 'react';
import logo from '../../img/icon.png'
import logoWhite from '../../img/icon_white.png'

import './LogoComponent.css'

export default function LogoComponent(props){

    const {small, white}= props;

    return <img 
            className={`LogoComponent ${small?"small":''}`}
            alt="logo"
           src={white?logoWhite:logo}
        />
    
}