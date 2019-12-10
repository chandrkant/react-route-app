import React from 'react'

export default function TextInput(props) {
    return(
        <input
            type={props.type}
            className={props.className}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.handleChange(e,props.type)}
        />
    )
}