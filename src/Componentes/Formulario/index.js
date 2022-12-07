import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaSupensa from "../ListaSupensa"
import Botao from "../Botao"
import { useState } from "react"

export default function Formulario(props) {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    
    const aoSalvar = (e) => {
        e.preventDefault();
        props.aoColaboradorCadastrado({
            nome, 
            cargo, 
            imagem, 
            time
        })

        setNome('');
        setImagem('');
        setTime('');
        setCargo('');
        
        // console.log('Form foi submetido', nome, cargo, imagem, time)
    }

    return (
        <section>
            <form className='formulario' onSubmit={aoSalvar}>
                <h2 className='formulario__texto'>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome" 
                tipo="text" 
                placeholder="Digite seu nome"
                valor={nome} 
                aoAlterado={valor => setNome(valor)}/>

                <CampoTexto label="Cargo" 
                tipo="text"
                 placeholder="Digite seu cargo"
                 valor={cargo}
                 aoAlterado={valor => setCargo(valor)} />

                <CampoTexto label="Imagem"
                 tipo="text"
                  placeholder="Informe o endereço da sua imagem" 
                  valor={imagem}
                  aoAlterado={valor => setImagem(valor)}/>

                <ListaSupensa label="Time" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)} />
                <Botao>Criar card</Botao>
            </form>
        </section>

    )
}