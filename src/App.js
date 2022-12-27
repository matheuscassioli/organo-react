
import { useState } from 'react';
import './App.css';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Time from "./Componentes/Time"
import Rodape from "./Componentes/Rodape"
import { v4 as uuidv4 } from 'uuid';

export default function App() {

  const [colaboradores, setColaboradores] = useState([])

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57c278'
    },
    {
      id: uuidv4(),
      nome: 'Front-end',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
  ]);


  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function aoDeletar(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudaCorTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }])
  }


  return (
    <div className="App">

      <Banner alt="banner do organo" />

      <main>
        <Formulario
          times={times.map((time) => time.nome)}
          aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
          cadastrarTime={cadastrarTime}
        />

        <h3 className='App__minhaorganizacao'>Minha organização</h3>
        {
          times.map((time, indice) => <Time key={indice}
            time={time}
            nome={time.nome}
            mudaCorTime={mudaCorTime}
            cor={time.cor}
            aoDeletar={aoDeletar}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)
            }
          />
          )
        }

      </main>

      <Rodape />

    </div>
  );
} 
