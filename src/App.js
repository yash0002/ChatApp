import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import RegisterScreen from './screen/register_screen'
import LoginScreen from './screen/login_screen'
import ChatAppPageScreen from './screen/chat_app_page_screen'
import { BrowserRouter as Router, Route } from "react-router-dom";
//import Register_component from './component/register_componenet';
import io from 'socket.io-client';
const socket_io = io.connect('http://localhost:3001');

class App extends Component {
  state = {
    data : null
  };
  
  componentDidMount() {
    //calling fetch function here once components mounts
    // this.callBackendAPI()
    // .then(res => this.setState ({ data : res.express}))
    // .catch(err => {
    //   console.log(err)
    // })
  }

  //fetching our GET route from express server {only those route have to fetch}
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if(response.status !== 200) {
      throw Error(body.message)
    }
    
    return body;
  }
  render() {
    socket_io.emit('Server Connected on Client Side');
    return (
      <div>
      
        <Router>
          <div>
            <Route exact path='/' component = {LoginScreen} />
            {/* <Route exact path="/login" component={Login} /> */}
            <Route path = "/chat_page" component={ChatAppPageScreen} />
            <Route path = "/register" component={RegisterScreen} />
          </div>
        </Router>
      
      </div>
    )
  }
}

export default App;
