/**
 * @description this is for login page component
 * @author  Yash
 * @since   11/11/2018
 * @version 1.5.
 * @module axios, react, material-ui
 */
import React, { Component } from "react";
import chat_service from '../services/chat_service';

// var async_waterfall = require('async-waterfall');
// // import promise from 'Promise';
// /**
//  * @description Class Component to render display option we want on page
//  * @extends React Component to make it a component
//  * @function render to display on webpage & to write html code
//  */
// class Chat_App_Message_Display_Component extends Component {
//     /**
//      * @description setting value of any text field to some object element declared in constructor
//      * @param {Object.props} props 
//      * @constructor to set values to object element
//      */
//     constructor(props) {
//         super(props);
//         this.state = {
//             message_display: []
//         };
//     }

//     componentDidMount() {
//         console.log('did mount in client side');
//         var display_array = chat_service.chat_app_socket_on();
//         console.log("display_array:..........",display_array);
//         set
//         // async_waterfall ([
//         //     function(callback) {
//         //         var display_array = chat_service.chat_app_socket_on();
//         //         callback(null, display_array);
//         //     } ], function (err, result) {
//         //         if(err) {
//         //             console.log('error on component page while fetching chats');
//         //             console.log(err);
//         //         }
//         //         else {
//                     // console.log('------------------display array---------------');
//                     // console.log(result);
//                     // for (let i = 0; i < result.length; i++) {
//                     //     this.setState({
//                     //         message_display: result[i]
//                     //     })  
//                     // }
                    
//                     // console.log('this.state.message_display----------------');
//                     // console.log(this.state.message_display);
                    
                    
//                     // this.setState({
//                     //     message_display: result
//                     // })
//             //     }
//             // });
//                  // let display_array = new Promise( chat_service.chat_app_socket_on());
        

//         // display_array.then( function retrieving(result) {
//         //     Result = result;
//         //     console.log('-----------------display_array----------------');
//         //     console.log(display_array);
//         //     this.setState({
//         //         message_display: display_array
//         //     })
//         // })
//         // for(let i=0; i<display_array.length; i++)
//         // {
//         // this.setState({
//         //     message_display: display_array
//         // })
//         // }
//     }

//     render() {
//         console.log("sadadasdasdsaddsadsadsa");
        
//         console.log(this.state.message_display);
//         return (
//             <div >
//                 <br />
//                 {this.state.message_display.toLocaleString()}
//                 {this.state.message_display.map(value => {
//                     return value
//                 })}
//                 {/* <div display = "inline-block" value = {display_array} id = "chat-div"></div> */}
//             </div>
//         );
//     }
// }

/**
 * @description Class Component to render display option we want on page
 * @extends React Component to make it a component
 * @function render to display on webpage & to write html code
 */
class Chat_App_Message_Display_Component extends Component {

    /**
     * @description setting value of any text field to some object element declared in constructor
     * @param {Object.props} props 
     * @constructor to set values to object element
     */
    constructor(props)
    {
        super(props);
        this.state= {
            message_display: []
        }
    }
    componentDidMount() {
        console.log("component mounted");
        
        var display_array = chat_service.chat_app_socket_on();
        console.log("displayArray", display_array);
        
        this.setState({
            message_display: display_array
        })  
    }
    render() {
        console.log("render:''''''''''''",this.state.message_display);
        return (
            <div >
                <br />
                {this.state.message_display.toLocaleString()}
                {this.state.message_display.map((value) => {
                    return value
                    // return (<b>{value?value:null}</b>)// value = {this.state.message_display}> </div>)
                })}
                {/* <div display = "inline-block" value = {display_array} id = "chat-div"></div> */}
            </div>
        )
    }
}

/**
 * @exports Chat_App_Message_Display_Component Class as Component in react tech
 */

export default Chat_App_Message_Display_Component;