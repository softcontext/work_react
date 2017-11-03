import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/home">A</Link></li>
          {/* <a href="/home">A</a> */}
          <li><Link to="/about">B</Link></li>
          <li><Link to="/contact">C</Link></li>
          <li><a href="/home">A</a></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
