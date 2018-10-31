import React, {Component} from 'react';
import * as d3 from "d3";
import * as utils from './utils.js';
import './style.css';

class Gauge extends Component{
  constructor(props) {
    super(props);
    //** ref to select svg with d3 */
    this.svgD = React.createRef();
  }
  componentDidMount() {
    //** create svg container */
    this.svg = d3.select(this.svgD.current)
      .append('g')
      .attr('transform', 'translate(' + 0 + ',' + 0 + ')');

    //** create text placeholder */
    this.copyMin = utils.createText(-80, 10, 8, this.svg);
    this.copyMax = utils.createText(80, 10, 8, this.svg);
    this.copyValue = utils.createText(0, -5, 11, this.svg);
  }
  render() {
    return (
      <div
        className="gauge">
        <svg  
          className="svg-container"
          viewBox="0 0 200 200"
          preserveAspectRatio="xMidYMid"
          ref={this.svgD}>
        </svg>
      </div>
    );
  }
}

export default Gauge;
