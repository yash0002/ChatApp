/**
 * @description this is for login page component
 * @author  Yash
 * @since   11/11/2018
 * @version 1.5.
 * @module axios, react, material-ui
 */
import React,{Component} from 'react';
import { Button, TextField, } from '@material-ui/core';
import user_service from '../services/user_service';

/**
 * @description Class Component to render display option we want on page
 * @extends React Component to make it a component
 * @function render to display on webpage & to write html code
 */
class LoginComponent extends Component
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
            password : ""
        };
        this.setting_emailid = this.setting_emailid.bind(this);
        this.setting_password = this.setting_password.bind(this);
        this.login_process = this.login_process.bind(this);
    }

    /**
     * @description method to set value to class state variable
     * @param {Event} evt 
     */
    setting_emailid(evt)
    {
        this.setState(
            {
                email_id : evt.target.value
            }
        );
    }


    /**
     * @description method to set value to class state variable
     * @param {Event} evt 
     */
    setting_password(evt)
    {
        this.setState(
            {
                password : evt.target.value
            }
        );
    }


    /**
     * @description method to set value to class state variable
     * @param {Event} evt 
     * @function login_process to go for login procedure when send button clicked & asked for response from server via request
     */
    login_process(event)
    {
        event.preventDefault();
        console.log('inside if-else method');
        console.log('pass : ', this.state.password);
        console.log('email - id : '+this.state.email_id);

        if(/^[a-z](\.?[a-z0-9]){3,}@g(oogle)?mail\.com$/g.test(this.state.email_id))
        {
            if(this.state.password.length >= 5)
            {
                if(/^[a-zA-Z0-9][\w!]{5,9}$/g.test(this.state.password))
                {
                    console.log('email - id : '+this.state.email_id);
                    console.log('password : '+this.state.password);
                    user_service.login_service(this.state.email_id, this.state.password);                   
                }
                else {
                    alert('Password Invalid');
                }
            }
            else {
                alert("Password Invalid");
            }
        }
        else {
            alert("Email_id Invalid");
        }
    }

    render() {
       
         return (
            <div display = "inline-block" >
                <br/><br/>

                <TextField label="Email_id" value = {this.state.email_id} onChange={this.setting_emailid} ></TextField>
                <br/><br/>

                <TextField label="Password" type = "password" value = {this.state.password} onChange={this.setting_password}></TextField>
                <br/><br/>
                <a id = "link-display" href = "/register" >New User</a> &nbsp;&nbsp;&nbsp;
                <Button onClick = {this.login_process} >Login</Button>
            </div>   
        );
    }
}

/**
 * @exports Register Class as Component in react tech
 */

export default LoginComponent;
