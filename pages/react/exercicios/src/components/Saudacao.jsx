import React, { Component } from 'react'

export default class Saudacao extends Component {  //criando um componente extendendo de React (Component)

    //definindo meus atributos
    state = {
        tipo: this.props.tipo,  //Seta o estado inicial conforme o que receber nas props
        nome: this.props.nome
    }
    
    constructor(props) { //inicializando o estado por uso de uma função construtora
        super(props) //Mantem a compatibilidade (super)
        
        //dentro de construtor o this aponta para a instância de Saudacao
        this.setTipo = this.setTipo.bind(this) //o this dentro de bind vai ser o mesmo do componente Saudacao
    }

    setTipo(e) {
        this.setState({ tipo: e.target.value }) 
    }
                                                    //A função setState altera os estados
    setNome(e) {                                    //como parametro, passa os atributos
        this.setState({ nome: e.target.value })
    }

    render() { //Clase que vai renderizar o componente
        //Destructuring tirou os atributos de dentro de props. Referenciamento
        const { tipo, nome } = this.state //this pega o componente atual. Com state podemos alterar o att
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." 
                    value={tipo} onChange={this.setTipo} /> {/* Nesse caso, o bind faz o this apontar para o comp. */ }
                <input type="text" placeholder="Nome..."
                    value={nome} onChange={e => this.setNome(e)}/>  { /*Nesse caso o this aponta para o comp atual.*/ }
            </div>
        )
    }
}


//Observações
//Você não consegue alterar os parâmetros que são passados via props.
//Props é somente leitura
//State é a parte onde conseguimos alterar os atributos.
//O componente só é atualizado quando o estado muda.
//Na renderizaçõa temos os estados dos componentes, não necessáriamente a vizualização deles na tela