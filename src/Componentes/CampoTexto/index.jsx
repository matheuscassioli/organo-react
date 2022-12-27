import "./CampoTexto.css"
import React from 'react';  

export default function CampoTexto({aoAlterado, valor, tipo ='text', placeholder, label}){
 
    const aoDigitado = (e) =>{
     aoAlterado(e.target.value)
    }

    return (

        <div className={`campoTexto campoTexto${tipo}`}>   
            <label htmlFor="User" className="campoTexto__label">{label}</label>
            <input onChange={aoDigitado} value={valor}  required type={tipo} placeholder={placeholder} className="campoTexto__input"/>
        </div>

    )
}