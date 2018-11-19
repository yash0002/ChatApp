/**
 * @description this is for service part
 * @author  Yash
 * @since   11/11/2018
 * @version 1.5.01
 * @module axios from ajax
 */
// import axios from 'axios';
const axios = require('axios');
const io = require('socket.io-client');
const socket_io = io.connect('http://localhost:3001');

/**
 * @description Method to send request for message sending from client side to server side
 * @param {String} email_id 
 * @param {String} password 
 */
function chat_app_socket_emit(message_sent)
{
    console.log('Service-client-chat-app-textbox');
    let user_login = localStorage.getItem("user_login");
    // let  message_with_user_email = {"message":message_sent, "user_email_id": user_login};
    // socket_io.emit('chat_message', message_with_user_email)
    console.log('user_login : ',user_login);
    let object_request = {
        email_id : user_login,
        message_sent : message_sent
    };
    
    socket_io.emit('chat_message', user_login, message_sent);
    
    // socket_io.on('response_message', function(response) {
    // console.log('reponse : -----');
    // console.log(response);    
    // });
}

/**
 * @description Method to send request for message sending from client side to server side
 * @param {String} email_id 
 * @param {String} password 
 */
function chat_app_socket_on()
{
    console.log('Service-client-chat-app-textarea');
    let array_message = [], array_email_id = [], array_chats_final = [];
    
    socket_io.on('response_message', function(response) {
    console.log('reponse on client side in service.js page : -----');
    console.log(response.message);
    console.log(response.email_id);        
    for(let i in response.message)
    {
        console.log('i');
        console.log(response.message[i]);        
        array_message.push(response.message[i]);
    }
    console.log('---------------------individuals chats here on client side ------------------------');
    console.log(array_message);    

    for(let i in response.email_id)
    {
        console.log(response.email_id[i]);
        array_email_id.push(response.email_id[i]);
    }
    console.log('---------------------individual sender here on client side ------------------------');
    console.log(array_email_id);    
    for(let i in array_message)
    {
        array_chats_final.push(array_message[i] +' By :- '+ array_email_id[i] );
    }
    console.log('---------------------final chats here on client side ------------------------');
    console.log(array_chats_final);    
    });
    return array_chats_final;
}

module.exports = {chat_app_socket_emit, chat_app_socket_on};