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

/**
 * @description Class Component to render display option we want on page
 * @extends React Component to make it a component
 * @function render to display on webpage & to write html code
 */
class Logout_component extends Component
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
        this.logout_process = this.logout_process.bind(this);
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
    logout_process(event)
    {
        event.preventDefault();
        console.log('inside if-else method');
        console.log('pass : ', this.state.password);
        console.log('email - id : '+this.state.email_id);

        

        // if(/^[a-z](\.?[a-z0-9]){3,}@g(oogle)?mail\.com$/g.test(this.state.email_id))
        // {
        //     if(this.state.password.length >= 5)
        //     {
        //         if(/^[a-zA-Z0-9][\w!]{5,9}$/g.test(this.state.password))
        //         {
        //             console.log('email - id : '+this.state.email_id);
        //             console.log('password : '+this.state.password);
        //             user_service.login_service(this.state.email_id, this.state.password);                   
        //         }
        //     }
        // }
    }

    render() {
       
         return (
            <div display = "inline-block" >
                <br/>
                <Button onClick = {this.logout_process} >Logout</Button>
            </div>   
        );
    }
}

/**
 * @exports Register Class as Component in react tech
 */

export default Logout_component;
