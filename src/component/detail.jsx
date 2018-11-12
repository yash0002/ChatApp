import React,{Component} from 'react';
//import ReactDOM from 'react-dom';
 import { Button, TextField, FormLabel } from '@material-ui/core';


class Welcome extends Component
{
    render() {
         return (
             <div>
                 <form>
                     <FormLabel>Username</FormLabel>
                     <TextField></TextField>
                     <FormLabel>Password</FormLabel>
                     <TextField></TextField>
                     <Button>Submit</Button>

                 </form>
             </div>
              );
    }
}

export default Welcome;
