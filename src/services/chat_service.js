/**
 * @description this is for service part
 * @author  Yash
 * @since   11/11/2018
 * @version 1.5.01
 * @module socket_io to make two way communication possible
 */
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
    console.log('user_login : ',user_login);
    // let object_request = {
    //     email_id : user_login,
    //     message_sent : message_sent
    // };
    socket_io.emit('chat_message', user_login, message_sent);
}

/**
 * @description Method to send request for message sending from client side to server side
 * @param {String} email_id 
 * @param {String} password 
 */
function chat_app_socket_on(callback)
{
    socket_io.on('response_message', function(response) {
     callback(response);
    });
}

module.exports = {chat_app_socket_emit, chat_app_socket_on};