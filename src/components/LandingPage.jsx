import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
    };
  };

  setName(event) {
    event.preventDefault();
    const value = this.storeInput.value;

    this.setState({ name: value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Mind of a Wizard</h1>
        </header>
        <p className="App-intro">
          This will be the base for wizard blog.
        </p>
        {this.state.name
        ? <div>Welcome {this.state.name.toUpperCase()} </div>
        : null}
        <form className="Title" onSubmit={this.setName.bind(this)}>
          Please enter your name:{' '}
          <input style={{ textAlign: 'center' }} type="text" required placeholder="Your name" ref={(input) => {this.storeInput = input}} />
          <button style={{ color: 'blue', fontWeight: 'bold' }} type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default LandingPage;
