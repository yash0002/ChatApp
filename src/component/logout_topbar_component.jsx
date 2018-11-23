/**
 * @description this is for login page component
 * @author  Yash
 * @since   11/11/2018
 * @version 1.5.
 * @module axios, react, material-ui
 */
import React,{Component} from 'react';
import { Button, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import user_service from '../services/user_service';
import MenuIcon from '@material-ui/icons/Menu';
/**
 * @description Class Component to render display option we want on page
 * @extends React Component to make it a component
 * @function render to display on webpage & to write html code
 */
class LogoutTopBarComponent extends Component
{

    /**
     * @description setting value of any text field to some object element declared in constructor
     * @param {Object.props} props 
     * @constructor to set values to object element
     */
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        this.logout_process = this.logout_process.bind(this);
        this.group_chat_switch = this.group_chat_switch.bind(this);
    }

    /**
     * @description method to set value to class state variable
     * @param {Event} evt 
     * @function login_process to go for login procedure when send button clicked & asked for response from server via request
     */
    logout_process(event)
    {
        event.preventDefault();
        user_service.logout_service();
        // let logout_service_response = user_service.logout_service();
        // if(logout_service_response != null) {
        //     browserHistory.push('/');
        // }
        // {
        //     this.setRedirect = () => {
        //         this.setState({
        //             redirect : true
        //         })
        //     }
         
        //     this.renderRedirect = () => {
        //         if(this.state.redirect) {
        //             return <Redirect to='/' />
        //         }
        //     }
        // }
        // else
        // {
        //     console.log('Redirect Issue');
            
        // }
    }

    group_chat_switch(event) {
        window.location.replace('/chat_page');
    }

    render() {
       
         return (
            <div display = "inline-block">
                <AppBar position = "fixed">
                    <Toolbar>
                        <IconButton aria-label='Menu'>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' color='inherit'>Home</Typography>
                        <Button id = "groupchat-button-style" onClick = {this.group_chat_switch}>Group Chat</Button>
                        <Button onClick = {this.logout_process} id = "logout-button-style" >Logout</Button>
                    </Toolbar>
                </AppBar>
            </div>   
        );
    }
}

/**
 * @exports LogoutTopBarComponent Class as Component in react tech
 */
export default LogoutTopBarComponent;