/**
 * @description this is for service part
 * @author  Yash
 * @since   11/11/2018
 * @version 1.5.01
 * @module axios from ajax
 */
// import axios from 'axios';
const axios = require('axios');
function login_service(email_id, password)
{
    console.log('Service-client');    
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
    console.log('Service-client');
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

module.exports = {register_service, login_service};