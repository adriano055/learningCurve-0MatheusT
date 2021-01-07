import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {  // Inicializa com esses valores
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = { ...initialState }


    /* Transformando o this em "local" para ser acessado pelo componente */
    constructor(props) {  
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }


    clearMemory() {
        this.setState({ ...initialState }) /* restaura a calc para o valor inicial */
    }

    setOperation(operation) {
        /* Alterna o valor do vetor de valores (values) */
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true }) /* Atrela a op, o clear */
        } else {
            /* verifica se o prox passo vai ser outra op ou se vai ser o resultado. */
            const equals = operation === '='
            const currentOperation = this.state.operation  //pega a operação corrente

            const values = [...this.state.values] //clone de values
            try {
                /* Faz o calculo do valor em cima da função eval, caso outro operador seja digitado 
                * no meio  co calculo. No caso, o valor será armazenado no values, na posição 0 e o
                * indice 1 será zerado */
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch(e) {
                values[0] = this.state.values[0]
            }

            values[1] = 0

            this.setState({
                displayValue: values[0], //resultado será armazenado no display
                operation: equals ? null : operation, // se for equals, a operação é setada para nula. Caso contrário faz a próx.
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit(n) {
        /* Se já tiver um ponto no display, não pode adc outro  */
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        /* - Verificação se precisa limpar display - 
        * Quando o display mostra somente o 0
        * limpa o display para colocar o número com valor significativo */
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false }) /* Alimenta o valor e seta a limpeza para false */

        /* Quando for digitado algo diferente de ponto
        * guarda o estado em current  (concatenação)
        * e salva no array de valores */
        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
            console.log(values)
        }
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} /> {/* Aponta para o estado inicial */}
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation />
                
            </div>
        )
    }
}