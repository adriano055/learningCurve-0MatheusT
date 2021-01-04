import React from 'react'
import ReactDOM from 'react-dom'
import BomDia from './components/BomDia'
import Primeiro from './components/Primeiro'
import {BoaTarde, BoaNoite} from './components/Multiplos' //Importanto vários componentes de um arquivo.
import Multi from './components/Multiplos' //importando a pág para acessar por obj

ReactDOM.render(
  <div>  
    <Primeiro/>
    <BomDia nome ="Matheus"/>
    <BoaTarde/>
    <Multi.BoaNoite/> 
  </div>
,document.getElementById('root'))