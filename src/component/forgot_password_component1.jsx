/**
 * @description base component of register page
 * @author Yash
 * @version 3.3.0
 * @since 12/11/2018
 * @package react, material-ui/core
 */
import React from 'react';
import { Button, TextField } from '@material-ui/core';
import user_service from '../services/user_service';

/**
 * @description Class Component to render display option we want on page
 * @extends React Component to make it a component
 * @function render to display on webpage & to write html code
 */
class ForgotPasswordComponent1 extends React.Component
{

    /**
     * @description setting value of any text field to some object element declared in constructor
     * @param {Object.props} props 
     * @constructor to set values to object element
     */

    constructor(props) {
        super(props);
        this.state = {
            email_id : "",
        };
        this.register = this.register.bind(this);
        this.setAll = this.setAll.bind(this);
    }

    /**
     * @description method to set value to class state variable
     * @param {Event} evt 
     */

    setAll(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
        console.log(typeof this.state.email_id);
    }
    
    /**
     * @description method to set value to class state variable
     * @param {Event} evt 
     * @function register to go for register procedure when send button clicked & asked for response from server via request
     */
    register(event)
    {
        event.preventDefault();
         if(/^[a-z](\.?[a-z0-9]){2,}@g(oogle)?mail\.com$/g.test(this.state.email_id))
         {
            user_service.forgot_service(this.state.email_id);
         }
         else {
            alert('Email-id not valid');
         }
    }
    render() {
         return (
            <div display = "inline-block" >
                <br/><br/>
                {/* 
                * @des this is when setting all values via single method
                */}
                <TextField label="Email_id" name = "email_id" value = {this.state.email_id} onChange = {this.setAll}></TextField>
                <br/><br/>
                <a href = "/" id = "links-display">Return</a>
                <Button onClick = {this.register}>Submit</Button>
            </div>                
        );
    }
}
/**
 * @exports Register Class as Component in react tech
 */
export default ForgotPasswordComponent1;
