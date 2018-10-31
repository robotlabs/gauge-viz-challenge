import React, { Component } from 'react';
import {gaugeApi} from './../services/api';
import {gaugeParser} from './../services/data-parser';
import Gauge from './gauge/gauge'
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    //** init state */
    this.state = {
      gaugeData: {}
    }
  }
  componentDidMount() {
    //** test api */
    gaugeApi(gaugeParser)
      .then((data) => {
        //returning data after parse ()
        console.log('data from api test', data);
      })
  }
  render() {
    console.log('this state ', this.state);
    return (
      <div className="appx">
        <Gauge
          data={this.state.gaugeData}>
        </Gauge>
      </div>
    );
  }
}

export default App;
