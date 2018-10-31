import React, {Component} from 'react';
import './style.css';

class Gauge extends Component{
  constructor(props) {
    super(props);
    this.svgD = React.createRef();
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
