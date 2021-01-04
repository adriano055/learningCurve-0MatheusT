import React from 'react'

export function childrenWithProps(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {   //Clona um elemento (pode adcionar novas propriedades)
            ...props, ...child.props          //cloneElement funciona apenas para um valor por vez, por isso chamar o map
        })
    })
}