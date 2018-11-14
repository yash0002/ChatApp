import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './screen/register'
import Login from './screen/login'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    data : null
  };
  
  componentDidMount() {
    //calling fetch function here once components mounts
    this.callBackendAPI()
    .then(res => this.setState ({ data : res.express}))
    .catch(err => console.log(err))
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
    return (
      <div>
      
        <Router>
          <div>
            <Route exact path='/' component = {Login} />
            <Route exact path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </div>
        </Router>
      
      </div>
    )
  }
}

export default App;
