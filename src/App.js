import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './screen/register'
import Login from './screen/login'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
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
