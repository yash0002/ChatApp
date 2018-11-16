/**
 * @description this is for login page component
 * @author  Yash
 * @since   11/11/2018
 * @version 1.5.
 * @module axios, react, material-ui
 */
import React,{Component} from 'react';
import { Button, TextField, FormLabel } from '@material-ui/core';
import user_service from '../services/user_service';

class Login_component extends Component
{
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

    setting_emailid(evt)
    {
        this.setState(
            {
                email_id : evt.target.value
            }
        );
    }

    setting_password(evt)
    {
        this.setState(
            {
                password : evt.target.value
            }
        );
    }

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
            }
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

export default Login_component;
