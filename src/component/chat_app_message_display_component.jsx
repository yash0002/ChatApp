/**
 * @description this is for login page component
 * @author  Yash
 * @since   11/11/2018
 * @version 1.5.
 * @module axios, react, material-ui
 */
import React, { Component } from 'react';
import chat_service from '../services/chat_service';
// import promise from 'Promise';
/**
 * @description Class Component to render display option we want on page
 * @extends React Component to make it a component
 * @function render to display on webpage & to write html code
 */
class Chat_App_Message_Display_Component extends React.Component {
    /**
     * @description setting value of any text field to some object element declared in constructor
     * @param {Object.props} props 
     * @constructor to set values to object element
     */
    constructor(props) {
        super(props);
        this.state = {
            message_display: []
        };
        // let array_message = [];
        // this.setting_message_value_function = this.setting_message_value_function.bind(this);
        // this.message_display_function = this.message_display_function.bind(this);
    }
    // this.setting_message_value_function();
    // setting_message_value_function()
    // {
    //     chat_service.
    //     socket_io.on('response_message', function(response) {
    //         console.log('-----------------response by server on client textarea component----------------');
    //         // console.log(response);
    //         response.forEach(function (x) {
    //             for(let y in x)
    //             {
    //                 console.log('---------------------------y-------------------');
    //                 console.log(y);                    
    //             }

    //             // this.array_message.push(x.message)
    //         })           
    //         // console.log('-----------array of message------');
    //         // console.log(this.array_message);            

    //         // this.setState({
    //         //     message_display : response
    //         // });
    //         // console.log(this.state.message_display);
    //     });
    // }

    componentDidMount() {
        console.log('did mount in client side');
        let display_array = [];
        display_array = chat_service.chat_app_socket_on();
        console.log('-----------------display_array----------------');
        console.log(display_array);        
        
        // for(let i=0; i<display_array.length; i++)
        // {
        this.setState({
            message_display: display_array
        })
        // }
    }
    // message_display_function(event)
    // {
    //     this.
    //     event.preventDefault();
    //     this.setting_message_value_function(event);
    //     chat_service.chat_app_socket_on();
    //     // let chat_messages_response = chat_service.chat_app_socket_on();
    //     // this.setState({
    //     //     message_display : chat_messages_response
    //     // })
    //     // console.log('chat messages -----------');
    //     // console.log(chat_messages_response);       
    // }

    render() {
        // // this.setting_message_value_function();
        // let display_array = new Promise(chat_service.chat_app_socket_on());
        // display_array.then(function(result) {
        //     Result = result;
        // }).console.error();
        console.log(this.state.message_display);
        

        // this.state
        return (
            // <body onLoad = "this.setting_message_value_function">

            <div >
                <br />
                {this.state.message_display.map(value => {
                    return <div id={value}>{value?value:null}</div>
                })}
                {/* <div display = "inline-block" value = {display_array} id = "chat-div"></div> */}
            </div>
            // </body>
        );
    }
}

/**
 * @exports Chat_App_Message_Display_Component Class as Component in react tech
 */

export default Chat_App_Message_Display_Component;
