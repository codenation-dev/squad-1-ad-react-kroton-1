import React from 'react';

import './InputComponent.css'

export default function InputComponent(props){

    const {type, disabled, placeholder  }= props;

    return <input 
            className="InputComponent"
            type={type ? type :'text'}
            placeholder = {placeholder? placeholder: ''}
            disabled ={disabled}
        />
    
}