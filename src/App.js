import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import EventHandler from './EventHandler.js';
import ColoredBlock from './ColoredBlock.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to React
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p>
        Hi {this.props.name}
        </p>
        <Clock />
        <EventHandler />
        <ColoredBlock />
      </div>
    );
  }
}

export default App;
