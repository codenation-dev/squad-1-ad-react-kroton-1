import React from 'react';

import './ButtonComponent.css'

export default function ButtonComponent(props){

    const {type, value, text ,disabled, form }= props;

    return <button 
            className="ButtonComponent"
            type={type ? type :'button'}
            form={form ? form :''}
            value = {value? value: ''}
            disabled={disabled}
        >{text}</button>
    
}