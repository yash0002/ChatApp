
/**
 * @description login app page display
 * @author Yash
 * @module Screen
 * @since 12/11/2018
 * @version 2.5
 */
import React from 'react';
import ForgotPasswordComponent1 from '../component/forgot_password_component1'

/**
 * @description Class Component to render display option we want on page
 * @extends React Component to make it a component
 * @function render to display on webpage & to write html code
 */
class ForgotPasswordScreen1 extends React.Component
{
    render() {
        return (
            <div className = "centre-content">
                <br/><br/><br/>
                <img src = {require('../images/user_image.jpg')} alt="User Registration" id = "img-top" /><br />
                <ForgotPasswordComponent1 />
            </div>
        );
    }
}

/**
 * @exports Register Class as Component in react tech
 */
export default ForgotPasswordScreen1;