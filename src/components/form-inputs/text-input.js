import React from 'react'
import "./index.css"
export default function TextInput(props) {
    return(
        <input
            type={props.type}
            className={`__text-input ${props.className}`}
            placeholder={props.placeholder}
            value={props.value}
            style ={props.style}
            autoComplete='off'
            onChange={(e) => props.handleChange(e,props.type)}
        />
    )
}