import React, { Component } from 'react';
import {gaugeApi} from './../services/api';
import {gaugeParser} from './../services/data-parser';
import './app.css';

class App extends Component {
  componentDidMount() {
    //** test api */
    gaugeApi(gaugeParser)
      .then((data) => {
        //returning data after parse
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
