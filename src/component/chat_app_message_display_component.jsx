/**
 * @description this is for login page component
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
class ChatAppMessageDisplayComponent extends Component {

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
        chat_service.chat_app_socket_on(function (list) {

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
        return (
            <div>
                {Object.keys(this.state.message_display).map(key => {
                    // console.log("key:.....", key);
                    // console.log(this.state.message_display[key].message);
                    // console.log(this.state.message_display[key].email_id);
                    return (
                        <div id = "chat_show" key={key}>
                            
                            <div id = "each_chat">
                                {/* <TextField id = "outlined-multiline-flexible" label = "Chats" multiline rowsMax = "10" variant = "outline" value = {this.state.message_display[key].message} ></TextField> */}
                                {this.state.message_display[key].email_id} : {this.state.message_display[key].message}<nav></nav>
                            </div>
                            {/* <div>
                                {this.state.message_display[key].email_id}
                            </div> */}
                        </div>
                    )
                })}
            </div>
        );
    }
}
/**
 * @exports Chat_App_Message_Display_Component Class as Component in react tech
 */
export default ChatAppMessageDisplayComponent;