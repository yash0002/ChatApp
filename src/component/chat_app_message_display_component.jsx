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
class Chat_App_Message_Display_Component extends Component
{
    /**
     * @description setting value of any text field to some object element declared in constructor
     * @param {Object.props} props 
     * @constructor to set values to object element
     */
    constructor(props) {
        super(props);
        this.state = {
            'message_display' : ''
        };
        this.setting_message_value_function = this.setting_message_value_function.bind(this);
        this.message_display_function = this.message_display_function.bind(this);
    }

    setting_message_value_function(event)
    {
        this.setState({
            message_display : event.target.value
        });
        console.log(this.state.message_display);
        
    }

    message_display_function(event)
    {
        event.preventDefault();
    }

    render() {
       
         return (
            <div display = "inline-block" >
                <br/>
                <textarea id = "chat-text-area-style" value = "this.state.message_display" onChange = "this.state.message_display_function"></textarea><br/>
            </div>   
        );
    }
}

/**
 * @exports Chat_App_Message_Display_Component Class as Component in react tech
 */

export default Chat_App_Message_Display_Component;
