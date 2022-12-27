import React from 'react'
import Colaborador from '../Colaborador'
import "./Time.css"
import fundo from "../../img/fundo_time.png"
import hexToRgba from 'hex-to-rgba';

const Time = ({ time, colaboradores, cor,  nome, aoDeletar, mudaCorTime }) => {
  return (

    (colaboradores.length > 0) && <section className='time' style={{ backgroundImage: `url(${fundo})`, backgroundColor: hexToRgba(time.cor, "0.6") }}>
      {/* rgba(17, 34, 51, 0.5 ) */}
      <h3 style={{ borderColor: cor }}>{nome}</h3>

      <input onChange={evento => mudaCorTime(evento.target.value, time.id)} value={cor} type="color" className="inputColor" />

      <div className='colaboradores'>

        {colaboradores.map(colaborador => {

          return <Colaborador key={colaborador.nome}
            cor={cor}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            aoDeletar={aoDeletar}
            colaborador={colaborador}
          />
        })}
      </div>
    </section>

  )

}

export default Time;