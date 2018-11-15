import React,{Component} from 'react';
import { Button, TextField, FormLabel } from '@material-ui/core';

class Login_component extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            value1 : "",
            value2 : ""
        };
        this.setting_value1 = this.setting_value1.bind(this);
        this.setting_value2 = this.setting_value2.bind(this);
        this.gotoRegister = this.gotoRegister.bind(this);
    }

    setting_value1(evt)
    {
        this.setState(
            {
                value1 : evt.target.value
            }
        );
        //console.log('this typed : ', this.state.value1 );
        let value_store1 = evt.target.value;
        console.log('value_store1', value_store1);
        
    }

    setting_value2(evt)
    {
        this.setState(
            {
                value2 : evt.target.value
            }
        );
        //console.log('this typed : ', this.state.value2 );
        let value_store2 = evt.target.value;
        console.log('value_store2', value_store2);
    }

    gotoRegister()
    {
        
    }    
   
    render() {
       
         return (
            <div display = "inline-block" >
                <br/><br/>

                <TextField label="Email_id" value = {this.state.value1} onChange={this.setting_value1} ></TextField>
                <br/><br/>

                <TextField label="Password" type = "password" value = {this.state.value2} onChange={this.setting_value2}></TextField>
                <br/><br/>
                <a id = "link-display" href = "/register" >New User</a> &nbsp;&nbsp;&nbsp;
                <Button onClick = "this.gotoRegister" >Login</Button>
            </div>   
        );
    }
}

export default Login_component;
