
import { useState } from 'react';
import './App.css';
import Banner from './Componentes/Banner'; 
import Formulario from './Componentes/Formulario'; 
import Time from "./Componentes/Time" 
import Rodape from "./Componentes/Rodape"

export default function App() {

const [colaboradores, setColaboradores] = useState([])

const aoNovoColaboradorAdicionado = (colaborador) =>{ 
  setColaboradores([...colaboradores, colaborador])
}

const times =[
  {
    nome:'Programação',
    corPrimaria:'#57c278', 
    corSecundaria:'#d9f7e9',
  },
  {
    nome:'Front-end',
    corPrimaria:'#82CFFA', 
    corSecundaria:'#E8FFFF',
  },
  {
    nome:'Data Science',
    corPrimaria:'#A6D157', 
    corSecundaria:'#E9FFE3',
  },
  {
    nome:'UX e Design',
    corPrimaria:'#DB6EBF', 
    corSecundaria:'#FAE9F5',
  },
  {
    nome:'Inovação e Gestão',
    corPrimaria:'#FF8A29', 
    corSecundaria:'#FFEEDF',
  },
  {
    nome:'Mobile',
    corPrimaria:'#FFBA05', 
    corSecundaria:'#FFF5D9',
  },
];
  
  return (
    <div className="App">

      <Banner alt="banner do organo" />
     
     <main>
     <Formulario times={
        
        times.map((time) => time.nome)
        
      } aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      <h3 className='App__minhaorganizacao'>Minha organização</h3>

       {
        times.map(time => <Time key={time.nome} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador =>colaborador.time === time.nome)}/>
          )
       } 

     </main>

      <Rodape />  
   
    </div>
  );
} 
