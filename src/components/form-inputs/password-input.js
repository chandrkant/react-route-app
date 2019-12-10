import React from 'react'
import TextInput from "./text-input";
export default function PasswordInput(props) {
 return(
     <TextInput
     type="password"
     className="__password-input"
     value={props.value}
     handleChange={props.handleChange}
     placeholder={props.placeholder}
     />
 )
}