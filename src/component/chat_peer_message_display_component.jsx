/**
 * @description this is for chats display page component
 * @author  Yash
 * @since   11/11/2018
 * @version 1.5.
 * @module axios, react, material-ui
 */
import React, { Component } from "react";
import chat_service from '../services/chat_service';

/**
 * @description Class Component to render display option we want on page
 * @extends React Component to make it a component
 * @function render to display on webpage & to write html code
 */
class ChatPeerMessageDisplayomponent extends Component {

    /**
     * @description setting value of any text field to some object element declared in constructor
     * @param {Object.props} props 
     * @constructor to set values to object element
     */
    constructor(props) {
        super(props);
        this.state = {
            message_display: ""
        }
    }
    componentDidMount() {

        var self = this;
        chat_service.chat_app_peer_socket_on(function (list) {

            if (list !== null && list !== undefined) {
                self.setState({
                    message_display: list
                })
            }
            else {
                self.setState({
                    message_display: []
                })
            }
        })


    }

    render() {
        // console.log('localstorage receiver_user : --', localStorage.getItem('receiver_user'));
        let user_logged_in = localStorage.getItem('user_login');
        return (
            // <ul>
            <div className = "display_chats">
                {Object.keys(this.state.message_display).map(key => {
                    // console.log("key:.....", key);
                    // console.log(this.state.message_display[key].message);
                    // console.log(this.state.message_display[key].email_id);
                    return (
                        <div id = "chat_show" key={key}>
                            <li>
                            <div id = "each_chat">
                                {user_logged_in === this.state.message_display[key].email_id ? (
                                    <div id = "each-chat-right">
                                        {this.state.message_display[key].email_id} : {this.state.message_display[key].message}
                                    </div>
                                ) : (
                                    <div id = "each-chat-left">
                                        {this.state.message_display[key].email_id} : {this.state.message_display[key].message}
                                    </div>
                                )}
                                {/* <TextField id = "outlined-multiline-flexible" label = "Chats" multiline rowsMax = "10" variant = "outline" value = {this.state.message_display[key].message} ></TextField> */}
                                {/* {this.state.message_display[key].email_id} : {this.state.message_display[key].message}<nav></nav> */}
                                {/* {this.state.message_display[key].message} */}
                            </div>
                            {/* <div>
                                {this.state.message_display[key].email_id}
                            </div> */}
                            </li>
                        </div>
                    )
                })}
            </div>
            // </ul>
        );
    }
}
/**
 * @exports ChatPeerMessageDisplayomponent Class as Component in react tech
 */
export default ChatPeerMessageDisplayomponent;