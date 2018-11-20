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
    // let  message_with_user_email = {"message":message_sent, "user_email_id": user_login};
    // socket_io.emit('chat_message', message_with_user_email)
    console.log('user_login : ',user_login);
    // let object_request = {
    //     email_id : user_login,
    //     message_sent : message_sent
    // };
    
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
function chat_app_socket_on(callback)
{
    socket_io.on('response_message', function(response) {
    console.log('reponse on client side in service.js page : -----');
    console.log(response);   
    var res = response; 
     callback(res);
    });
}

module.exports = {chat_app_socket_emit, chat_app_socket_on};