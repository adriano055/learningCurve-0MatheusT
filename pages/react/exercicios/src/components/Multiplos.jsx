import React from 'react'

const BoaTarde = props => <h1>Boa tarde {props.nome}</h1> 
export const BoaNoite = props => <h1>Boa Noite {props.nome}</h1> //Export cada componente individualmente

export { BoaTarde }
export default { BoaTarde, BoaNoite } //export default