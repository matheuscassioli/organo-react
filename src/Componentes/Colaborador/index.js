import React from 'react'
import "./Colaborador.css"

const Colaborador = ({ nome, cargo, cor, imagem, aoDeletar, colaborador }) => {

    const css = { backgroundColor: cor }

    return (
        <div className='colaborador'>
            <button className='delete' onClick={()=>{aoDeletar(colaborador.id)}} ></button>
            <div className='cabecalho' style={css}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;