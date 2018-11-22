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
    let message = `${message_sent} on ${new Date().toDateString()} at ${new Date().toLocaleTimeString()}`;
    let user_login = localStorage.getItem("user_login");
    let request_message = {
        email_id : user_login,
        message_sent : message
    };
    socket_io.emit('chat_message', request_message);
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

function chat_app_users_login(callback)
{
    // let users_login = [];
    let users_logged_in = localStorage.getItem("users_logged_in");
    // users_login.push(users_SaveInLocalStorage);
    console.log('users_logged_in');
    
    console.log(users_logged_in);
    return users_logged_in;
}

module.exports = {chat_app_socket_emit, chat_app_socket_on, chat_app_users_login};