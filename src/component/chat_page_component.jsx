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

class Chat_App_component extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            
        };
        
    }

    render() {
       
         return (
            <div display = "inline-block" >
                <br/><br/>
                <textarea id = ""></textarea><br/>
                <TextField label="Password" type = "password" value = {this.state.value2} onChange={this.setting_value2}></TextField>
                <Button onClick = {this.login_process} >Login</Button>
            </div>   
        );
    }
}

export default Chat_App_component;
