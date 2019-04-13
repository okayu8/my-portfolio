import React, { Component } from 'react';
import './App.css';
// import { spring, StaggeredMotion } from 'react-motion';
import Demo from './Demo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Demo />
          <h1>
            Yutaro Kataoka's<br />PORTFOLIO
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
