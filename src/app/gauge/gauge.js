import React, {Component} from 'react';
import * as d3 from "d3";
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
