import "./CampoTexto.css"
import React from 'react';  

export default function CampoTexto(props){
 
    const aoDigitado = (e) =>{
       props.aoAlterado(e.target.value)
    }

    return (

        <div className="campoTexto">   
            <label htmlFor="User" className="campoTexto__label">{props.label}</label>
            <input onChange={aoDigitado} value={props.valor} type={props.tipo} placeholder={props.placeholder} className="campoTexto__input"/>
        </div>

    )
}