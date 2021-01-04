import React from 'react'
import ReactDOM from 'react-dom'
import BomDia from './components/BomDia'
import Primeiro from './components/Primeiro'
import {BoaTarde, BoaNoite} from './components/Multiplos' //Importanto vários componentes de um arquivo.
import Multi from './components/Multiplos' //importando a pág para acessar por obj
import Saudacao from './components/Saudacao'
import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
  <div>  
    <Primeiro/>
    <BomDia nome ="Matheus"/>
    <BoaTarde/>
    <Multi.BoaNoite/>
    <Saudacao/> 
    <Pai nome="Joao" sobrenome="Sampaio"> 
      <Filho nome="Pedro"sobrenome="Sampaio"/>
    </Pai>

  </div>
,document.getElementById('root'))