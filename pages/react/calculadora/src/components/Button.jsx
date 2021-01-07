/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './Button.css'

export default props => {
    let classes = 'button '  /* Atribuindo as classes de operação, double ou triple quando passadas na criação do comp */
    classes += props.operation ? 'operation' : '' /* Se recebe a classe, atribui. Se não, vazio. */
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    
    return (
        <button 
            onClick={e => props.click && props.click(props.label)} /* Evento de click, que retorna o valor do botão */
            className={classes}>
            {props.label}
        </button>
    )
}