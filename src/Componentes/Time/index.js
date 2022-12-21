import React from 'react'
import Colaborador from '../Colaborador'
import "./Time.css"
 
const Time = ({corSecundaria, colaboradores, corPrimaria, nome, aoDeletar, mudaCorTime}) => {

  const css = { backgroundColor: corSecundaria }
   
  return (
 
    (colaboradores.length > 0) && <section className='time' style={css}>
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
  
    <input  onChange={evento  => mudaCorTime(evento.target.value, nome)} value={corSecundaria} type="color" className="inputColor"/>
      <div className='colaboradores'>

        {colaboradores.map(colaborador => { 

          return <Colaborador key={colaborador.nome}
            corPrimaria={corPrimaria}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            aoDeletar={aoDeletar}
          />
        })}
      </div>
    </section>

  )

}

export default Time;