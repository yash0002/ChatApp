/**
 * @description this is for service part
 * @author  Yash
 * @since   11/11/2018
 * @version 1.5.01
 * @module axios from ajax
 */
// import axios from 'axios';
const axios = require('axios');

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
 */
function logout_service()
{
    console.log('Service-client-link-logout');
    let log_user_email_id = localStorage.getItem("user_login");
    axios.post('/logout', {
        log_user_email_id : log_user_email_id,
    })
    .then(response => {
        console.log(response);
        if(response.data) {
            console.log('successful logout');
            localStorage.clear();
            window.location.replace("/");
            // return response;
        }
        else {
            console.log('logout Failed');
            return null;
        }
    }).catch(error => {
        console.log('logout error up on server');
        console.log(error);
        return null;
    })
}

module.exports = {register_service, login_service, logout_service};