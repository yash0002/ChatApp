/**
 * @description this is for login page component
 * @author  Yash
 * @since   11/11/2018
 * @version 1.5.
 * @module axios, react, material-ui
 */
import React, { Component } from "react";
import chat_service from '../services/chat_service';
var async = require('async');
// // import promise from 'Promise';
//------------------------------------------------------
//----------------Example of Async Waterfall------------
// async_waterfall ([
//     function(callback) {
//         var display_array = chat_service.chat_app_socket_on();
//         callback(null, display_array);
//     } ], function (err, result) {
//             if(err) {
//                 console.log('error on component page while fetching chats');
//                 console.log(err);
//             }
//             else {
//                 console.log('------------------display array---------------');
//                 console.log(result);
//             }
//         })
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
        console.log("component mounted");
        // var display_array = chat_service.chat_app_socket_on();
        // console.log("displayArray----", display_array);
       
        async.waterfall ([
            function(done) {
                console.log('Before Function calls');
                var display_array = chat_service.chat_app_socket_on();
                console.log("displayArray----", display_array);
                done(null, display_array);
            }, 
            function(result_display_array, done) {
                console.log('second function');
                console.log('result_display_array length', result_display_array);
                
                var msg1 = '';
                for (var i = 0; i < result_display_array.length; i++) {
                    msg1 = msg1 + result_display_array[i].msg;
                    console.log('Message String ',msg1);
                }
                // result_display_array.forEach(element => {
                //     console.log(element);
                    
                // });
                // console.log(msg1);
                
                done(null, msg1);
            } ]
            , function (err, result) {
                    if(err) {
                        console.log('error on component page while fetching chats');
                        console.log(err);
                    }
                    else {
                        console.log('------------------display Chats---------------');
                        console.log('chat_display ',result);
                        // this.setState({
                        //     message_display: result 
                        // });
                    }
                }
                )
        // console.log("messsage-display: ", this.state.message_display);
    }

    render() {
        console.log(this.state.message_display);

        return (
            <div>
                {/* {this.state.message_display.map(key => { */}
                {/* console.log("fssdfsdf",key); */}

                {/* // })} */}
            </div>
        );
    }
}
/**
 * @exports Chat_App_Message_Display_Component Class as Component in react tech
 */
export default ChatAppMessageDisplayComponent;