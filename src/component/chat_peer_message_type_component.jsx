/**
 * @description this is for login page component
 * @author  Yash
 * @since   11/11/2018
 * @version 1.5.
 * @module axios, react, material-ui
 */
import React,{Component} from 'react';
import { Button, TextField } from '@material-ui/core';
import chat_service from '../services/chat_service';
/**
 * @description Class Component to render display option we want on page
 * @extends React Component to make it a component
 * @function render to display on webpage & to write html code
 */
class ChatPeerMessageTypeComponent extends Component
{
    /**
     * @description setting value of any text field to some object element declared in constructor
     * @param {Object.props} props 
     * @constructor to set values to object element
     */
    constructor(props) {
        super(props);
        this.state = {
            message : ''
        };
        this.setting_message_value_function = this.setting_message_value_function.bind(this);
        this.message_send_function = this.message_send_function.bind(this);
    }

    setting_message_value_function(event)
    {
        this.setState({
            message : event.target.value
        });
    }

    message_send_function(event)
    {
        event.preventDefault();
        if(this.state.message !== "")
        {
            chat_service.chat_app_peer_socket_emit(this.state.message);
            // if(/^[a-zA-Z0-9]{5,30}$/g.test(this.state.message))
            // {
            //     chat_service.chat_app_socket_emit(this.state.message);
            // }
            // else {
            //     alert('Invalid Message !');
            // }
        }
        else {
            alert('Invalid Message');
        }
    }

    render() {        
         return (
            <div display = "inline-block" >
                <Button onClick={this.message_send_function} ><img src = {require('../images/message_send_arrow.jpg')} alt="User Registration" id = "chat-send-image" /></Button>
                <TextField id="standard-multiline-flexible" rowsMax="3" label="Type Message" multiline margin="normal" inputProps={{ maxLength: 30 }} type = "TextField"  value = {this.state.message} onChange={this.setting_message_value_function} ></TextField>
                {/* onKeyPress = {this.setting_message_value_function} multiLine={true} */}
            </div>   
        );
    }
}

/**
 * @exports Chat_App_Message_type_Component Class as Component in react tech
 */

export default ChatPeerMessageTypeComponent;
