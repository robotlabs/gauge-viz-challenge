import React, { Component } from 'react';
import {gaugeApi} from './../services/api'
import './app.css';

class App extends Component {
  componentDidMount() {
    //** test api */
    gaugeApi(34)
          .then((data) => {
            console.log('data from api test', data);
          })
  }
  render() {
    return (
      <div className="app">
        Ciao
      </div>
    );
  }
}

export default App;
