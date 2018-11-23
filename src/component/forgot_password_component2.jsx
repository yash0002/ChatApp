/**
 * @description base component of register page
 * @author Yash
 * @version 3.3.0
 * @since 12/11/2018
 * @package react, material-ui/core
 */
import React from 'react';
import { Button, TextField } from '@material-ui/core';
import user_service from '../services/user_service';

/**
 * @description Class Component to render display option we want on page
 * @extends React Component to make it a component
 * @function render to display on webpage & to write html code
 */
class ForgotPasswordComponent2 extends React.Component {

    /**
     * @description setting value of any text field to some object element declared in constructor
     * @param {Object.props} props 
     * @constructor to set values to object element
     */

    constructor(props) {
        super(props);
        this.state = {
            pass_1: "",
            pass_2: ""
        };
        this.reset_password = this.reset_password.bind(this);
        this.setAll = this.setAll.bind(this);
    }

    /**
     * @description method to set value to class state variable
     * @param {Event} evt 
     */
    setAll(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    /**
     * @description method to set value to class state variable
     * @param {Event} evt 
     * @function register to go for register procedure when send button clicked & asked for response from server via request
     */
    reset_password(event) {
        event.preventDefault();
        if (/^[a-zA-Z][\w!]{5,9}$/g.test(this.state.password)) {
            if (this.state.pass_1 === this.state.pass_2) {
                user_service.reset_password_service(this.state.pass_1, this.state.pass_2);
            }
            else {
                alert("Password doen't match");
            }
        }
        else {
            alert('Password Invalid');
        }
    }

    render() {
        return (
            <div display="inline-block" >
                <br /><br />
                <TextField label="Enter New Password" type="password" name="pass_1" value={this.state.pass_1} onChange={this.setAll}></TextField>
                <br /><br />

                <TextField label="Enter New  Password Again" type="password" name="pass_2" value={this.state.pass_2} onChange={this.setAll} onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                        this.reset_password(event)
                    }
                }}>
                </TextField>
                <br /><br />
                <Button onClick={this.reset_password}>Reset</Button>
            </div>
        );
    }
}
/**
 * @exports Register Class as Component in react tech
 */
export default ForgotPasswordComponent2;
