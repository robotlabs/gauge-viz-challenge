import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as d3 from "d3";
import * as utils from './utils.js';
import './style.css';

//** init params */
const pi = Math.PI; 
const radius = 80;
const innerRadius = radius - (radius / 2.1);

class Gauge extends Component{
  static propTypes = {
    data: PropTypes.object
  }
  static defaultProps = {
    data: {}
  }
  constructor(props) {
    super(props);
    //** ref to select svg with d3 */
    this.svgD = React.createRef();
    //** bind */
    this.onUpdateTransition = this.onUpdateTransition.bind(this);

    //** init params */
    //** param used to interpolate value copy */
    this.valueOld = 0;
  }
  
  //** prevent component to render. we just need to know when props is updated */
  shouldComponentUpdate(nextProps) {
    this.updateData(nextProps.data);
    return false;
  }

  //** populate d3 objects */
  updateData(data) {
    if (data.error) {
      this.copyError.text(data.error)
        .attr("transform", function(d, i) {
          var len = this.getComputedTextLength();
          return "translate (" + (-len / 2) + ",0)";
        });
      this.copyMax.text('');
      this.copyMin.text('');
      this.copyValue.text('');
      return;
    }

    this.copyError.text('')
    const p = utils.percPi(data.value, data.min, data.max);
    //** udate copy */
    this.copyMax.text(data.maxCopy)
      .attr("transform", function(d, i) {
        var len = this.getComputedTextLength();
        return "translate (" + (-len) + ",0)";
      });
    this.copyMin.text(data.minCopy);

    //** update percentage arc */
    this.interpolateCopyValue = d3.interpolate(this.valueOld, data.value);
    this.percentageArc.transition()
          .duration(1150)
          .delay(0)
          .ease(d3.easePoly)
          .attrTween("d", utils.arcTween(p, this.arc, this.onUpdateTransition));

    this.valueOld = data.value;
  }

  onUpdateTransition(t) {
    const v = Math.floor(this.interpolateCopyValue(t));
    this.copyValue.text(v);
      this.copyValue
        .attr("transform", function(d, i) {
          var len = this.getComputedTextLength();
          return "translate (" + (-len / 3) + ",0)";
        });
  }

  componentDidMount() {
    //** create svg container */
    this.svg = d3.select(this.svgD.current)
      .append('g')
      //** hardcode to have a simple responsive svg */
      .attr('transform', 'translate(' + 100 + ',' + radius + ')');

    //** create text placeholder */
    this.copyMin = utils.createText(-80, 10, 8, this.svg);
    this.copyMax = utils.createText(80, 10, 8, this.svg);
    this.copyValue = utils.createText(0, -5, 11, this.svg);
    this.copyError = utils.createText(0, 15, 6, this.svg);

    //** create arc */
    this.arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(radius)
      .startAngle(-pi / 2);

    //** background arc path*/
    this.svg.append("path")
      .datum({endAngle: pi / 2})
      .style("fill", "#ddd")
      .attr("d", this.arc);

    //** percentageArc arc path*/
    this.percentageArc = this.svg.append("path")
      .datum({endAngle: -pi / 2})
      .style("fill", "#ff0099")
      .attr("d", this.arc);
  }

  

  render() {
    return (
      <div
        className="gauge">
        <svg  
          className="svg-container"
          viewBox="0 0 200 100"
          preserveAspectRatio="xMidYMid"
          ref={this.svgD}>
        </svg>
      </div>
    );
  }
}

export default Gauge;
