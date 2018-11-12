import React,{Component} from 'react';
import { Button, TextField, FormLabel } from '@material-ui/core';


class Register extends React.Component
{
    render() {
         return (
             <html>
                 <body>
                    <div className = "form-link">
                        <br/><br/>
                        <div display = "inline-block" >
                            <form>
                                <br/>
                                <img src = {require('../images/user_image.jpg')} alt="User Registration" id = "img-inline-div" />
                                <br/><br/><br/>

                                <label id = "align-text">Enter Your Email_id</label><br/>
                                <input type = "TextField" id = "user_emaid_id" name = "user_email_id" ></input>
                                <br/><br/>

                                <label>Enter your password</label><br/>
                                <input type = "TextField" id = "pass_word1" name = "pass_word1"></input><br/><br/>

                                <label>Enter Your password again</label><br/>
                                <input type = "TextField" id = "pass_word2" name = "pass_word2" ></input> <br/>
                                <br/>

                                <Button>Register</Button>
                            </form>
                        </div>
                    </div>
                </body>
             </html>
                
        );
    }
}

export default Register;
