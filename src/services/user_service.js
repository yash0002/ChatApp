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

function chat_app_service(email_id, password)
{
//     console.log('Service-client-chat-app-register');
//     socket_io.emit('chat message', $('#message_sent').val());
//     $('#m').val('');
//     return false;
}

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

module.exports = {register_service, login_service, logout_service, chat_app_service};