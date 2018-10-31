import React, { Component } from 'react';
import {gaugeApi} from './../services/api';
import {gaugeParser} from './../services/data-parser';
import Gauge from './gauge/gauge'
import './style.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    //** init state */
    this.state = {
      gaugeData: {}
    }
  }
  componentDidMount() {
    //** test api */
    this.refreshData();
    setInterval(() => {
      this.refreshData();
    }, 3500);
  }

  //** everytime we want to refresh data */
  refreshData() {
    gaugeApi(gaugeParser)
      .then((data) => {
        //returning data after parse ()
        this.setState({gaugeData: data})
      })  
      .catch(error => {
          this.setState({gaugeData: error})
        }
      );
  }
  render() {
    return (
      <div className="appx">
        <Gauge
          data={this.state.gaugeData}>
        </Gauge>
      </div>
    );
  }
}

export default Dashboard;
