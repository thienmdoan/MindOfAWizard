import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Messages from './components/Messages';
import Message from './components/Messages/Message';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="menu">
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/messages">Messages</Link> </li>
            <li> <Link to="/about">About</Link> </li>
          </ul>
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/messages" component={Messages}/>
            <Route path="/about" component={About}/>
            <Route path="/message/:id" component={Message} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
