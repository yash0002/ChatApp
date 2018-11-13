import React from 'react';
import { Button, TextField, FormLabel } from '@material-ui/core';


class Register_component extends React.Component
{
    render() {
         return (
            <div display = "inline-block" >
                <br/><br/>

                <TextField label="Email_id" ></TextField>
                <br/><br/>

                <TextField label="Enter Password" ></TextField>
                <br/><br/>

                <TextField label="Enter Password Again"></TextField>
                <br/><br/>
                
                <Button>Register</Button>
            </div>                
        );
    }
}

export default Register_component;
