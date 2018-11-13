import React,{Component} from 'react';
import { Button, TextField, FormLabel } from '@material-ui/core';


class Login_component extends Component
{
    constructor {
        super(props);
        
    }

    search_email()
    {
        
    }

    render() {
         return (
            <div display = "inline-block" >
                <br/><br/>

                <TextField label="Email_id" ></TextField>
                <br/><br/>

                <TextField label="Password" ></TextField>
                <br/><br/>

                <Button onClick = {search_email} >Login</Button>
            </div>   
        );
    }
}

export default Login_component;
