import React from 'react';
import Login_component from '../component/login_component'

class Login extends React.Component
{
    render() {
        return (
            <div class = "centre-content">
                <br/><br/><br/>
                <img src = {require('../images/user_image.jpg')} alt="User Registration" id = "img-inline-div" /><br />
                <Login_component />
            </div>
        );
    }
}

export default Login;