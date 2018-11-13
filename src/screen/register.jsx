import React from 'react'
import Register_component from '../component/register_componenet'

class Register extends React.Component
{
    render() {
        return (
            <div className="centre-content">
                <br/><br/><br/>
                <img src = {require('../images/user_image.jpg')} alt="User Registration" id = "img-inline-div" />
                <Register_component />
            </div>
        );
    }
}

export default Register;