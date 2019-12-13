import React from 'react'
import TextInput from "./text-input";
import {strengthColor, strengthIndicator} from "./strngth";

export default function PasswordInput(props) {
    const strength =  strengthIndicator(props.value);
    const color = strengthColor(strength);
 return(
     <TextInput
     type="password"
     className="__password-input"
     value={props.value}
     handleChange={props.handleChange}
     placeholder={props.placeholder}
     style = {{
         border: `1px solid ${color}`
     }}
     />
 )
}