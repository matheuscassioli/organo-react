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
    const [nomeTime, SetNomeTime] = useState('')
    const [corTime, SetCorTime] = useState('')

    const aoSalvar = (e) => {
        console.log('form enviado', nome, cargo, imagem, time)
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
        <section className="formulario">
            <form className='formulario__container' onSubmit={aoSalvar}>
                <h2 className='formulario__texto'>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome"
                    tipo="text"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} />

                <CampoTexto label="Cargo"
                    tipo="text"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)} />

                <CampoTexto label="Imagem"
                    tipo="text"
                    placeholder="Informe o endereço da sua imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} />

                <ListaSupensa label="Time" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)} />
                <Botao>Criar card</Botao>
            </form>

            <form className='formulario__container' onSubmit={(event) => {
                event.preventDefault();
                props.cadastrarTime({ nome: nomeTime, cor: corTime })
            }}>

                <h2 className='formulario__texto'>Preencha os dados para criar um novo time.</h2>
                <CampoTexto
                    label="Nome"
                    tipo="text"
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={valor => SetNomeTime(valor)} />

                <CampoTexto
                    label="Cor"
                    tipo="color"
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterado={valor => SetCorTime(valor)} />
                <Botao>Criar um novo time</Botao>
            </form>
        </section>

    )
}