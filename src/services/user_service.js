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
 * @description Method to send request for login already a user from client side to server side
 * @param {String} email_id 
 * @param {String} password 
 */
function login_service(email_id, password)
{
    console.log('Service-client-link-login');    
    axios.post('/login', {
        email : email_id,
        passw : password
    })
    .then(response => {
        console.log(response);
        if(response.data) {
            console.log('successful register');
            /*
            * one way to save item in localstorage by creating json object/format
                const person_log_in = {
                    name: email_id,
                }
                localStorage.setItem('user_login', JSON.stringify(person));
                or
                window.localStorage...
            * another way to save item is sessionstorage - which gets clear automatically when browser is closed
                sessionStorage.setItem("key", email_id);
            
            * another way is to save in cookies but its size is small that's why above two are good to go
            */
            localStorage.setItem('user_login', email_id);            
            window.location.replace('/chat_page')
        }
        else {
            console.log('Login Failed');
            
        }
    }).catch(error => {
        console.log('Login error up on server');
        console.log(error);
    })
}

/**
 * @description Method to send request for register a new user from client side to server side
 * @param {String} email_id 
 * @param {String} password 
 */
function register_service(email_id, password)
{
    console.log('Service-client-link-register');
    axios.post('/register', {
        email : email_id,
        passw : password
    })
    .then(response => {
        console.log(response);
        if(response.data) {
            console.log('successful register client services');
            //return response.redirectTo('/login');
            window.location.replace("/");
            // this.setState({
            //     redirectTo : 'login'
            // })
        }
        else {
            console.log('Registration Failed');
            
        }
    }).catch(error => {
        console.log('Registration error up on server');
        console.log(error);
    })
}

/**
 * @description Method to send request for logout from client side to server side
 * @param {String} email_id 
 */
function logout_service(email_id)
{
    console.log('Service-client-link-logout');
    axios.post('/logout', {
        email : email_id,
    })
    .then(response => {
        console.log(response);
        if(response.data) {
            console.log('successful logout');
            localStorage.clear();
            window.location.replace("/");
        }
        else {
            console.log('logout Failed');
            
        }
    }).catch(error => {
        console.log('logout error up on server');
        console.log(error);
    })
}

/**
 * @description Method to send request for message sending from client side to server side
 * @param {String} email_id 
 * @param {String} password 
 */
function chat_app_service(message_sent)
{
    console.log('Service-client-chat-app-register');
    let user_login = localStorage.getItem(user_login);
    // let  message_with_user_email = {"message":message_sent, "user_email_id": user_login};
    // socket_io.emit('chat_message', message_with_user_email)
    
    socket_io.emit('chat_message', message_sent, user_login)
    .then(response_message => {
        if(response_message.data) {
            socket_io.on('response_message', function(response_message) {
                console.log('response_message : ' ,response_message); 
            })
        }
        else console.log('Message not got in response');
    }).catch(error => { 
        console.log('message not got but error');
        console.log(error);        
    })
}

module.exports = {register_service, login_service, logout_service, chat_app_service};