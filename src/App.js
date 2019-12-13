import React, {Component} from 'react'
import EmailInput from "./components/form-inputs/email-input";
import './App.css'
import PasswordInput from "./components/form-inputs/password-input";
class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            email: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event,attr){
        const newState = {...this.state}
        newState[attr] = event.target.value;
        this.setState(newState);
    }
    render() {
        return(
            <div>
                <div className="form-input">
                    <EmailInput value={this.state.email} handleChange={this.handleChange} placeholder = "Email input field"/>
                </div>
                <div className="form-input">
                    <PasswordInput value={this.state.password} placeholder="Password" handleChange={this.handleChange}/>
                </div>
            </div>
        )
    }
}
export default App