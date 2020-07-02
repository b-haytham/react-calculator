import React from 'react'

const Button = (props) => {
    return <button value={props.name} id={props.id} onClick={props.onClick}>{props.name}</button>
}
export default Button