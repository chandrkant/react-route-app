import React from 'react'
import TextInput from "./text-input";

export default function EmailInput(props) {
return(
        <TextInput
        type="email"
        className="__email-input"
        value={props.value}
        handleChange={props.handleChange}
        placeholder={props.placeholder}
        />
    )
}