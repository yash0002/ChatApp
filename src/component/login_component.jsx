import React,{Component} from 'react';
import { Button, TextField, FormLabel } from '@material-ui/core';


class Login_component extends Component
{
    render() {
         return (
            <div display = "inline-block" >
                <br/><br/>

                <TextField label="Email_id" ></TextField>
                <br/><br/>

                <TextField label="Password" ></TextField>
                <br/><br/>

                <Button>Login</Button>
            </div>   
        );
    }
}

export default Login_component;
