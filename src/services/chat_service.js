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
 * @param {String} message_sent
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
 * @description Method to receive data from socket from server side
 * @param {callback} callback 
 */
function chat_app_socket_on(callback)
{
    socket_io.on('response_message', function(response) {    
        callback(response);
    });
}

/**
 * @description to get only users data from database, who are connected to group chat
 * @param {callback} callback 
 */
function chat_app_users_login(callback)
{
    socket_io.on('response_message', function(response) {
        let users_set = new Set(), users = [];
        
        response.forEach((y) => {
            // console.log('1 : ', y.email_id);            
            users_set.add(y.email_id);
        })
                
        users = Array.from(users_set);
        callback(users);
    });
}

/**
 * @description Method to receive data from socket from server side for peers
 * @param {callback} callback 
 */
function chat_app_peer_socket_on(callback)
{
    socket_io.on('response_peer_message', function(response) {    
        callback(response);
    });
}

function chat_app_peer_socket_emit(message_sent) {

    let message = `${message_sent} on ${new Date().toDateString()} at ${new Date().toLocaleTimeString()}`;
    let sender_email = localStorage.getItem("user_login");
    let receiver_email = localStorage.getItem("user_login");

    let request_message = {
        sender_email_id : sender_email,
        receiver_email_id : receiver_email,
        message_sent : message
    };
    socket_io.emit('chat_peer_message', request_message);
}

module.exports = {chat_app_socket_emit, chat_app_socket_on, chat_app_users_login, chat_app_peer_socket_on , chat_app_peer_socket_emit};