import React from 'react'
import "./Colaborador.css"

const Colaborador = ({nome, cargo, corPrimaria, imagem, aoDeletar}) =>{

    const css = { backgroundColor: corPrimaria}

    return(
        <div className='colaborador'>
            <button className='delete' onClick={aoDeletar} ></button>
            <div className='cabecalho' style={css}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;