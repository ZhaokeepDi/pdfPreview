import React, { Component } from 'react';
import logo from './grid.png';
import Com from './componse/con2.js'

import './App.css';
let obj={
  oo:1,
  ss:23
}
class App extends Component {
  render() {
    return (
      <div className="App">
      <Com name="jjjjj" obj={obj}></Com>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
      </div>
    );
  }
}
export default App;
