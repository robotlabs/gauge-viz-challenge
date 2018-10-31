import * as d3 from "d3";
//** utility to create d3 text */
export function createText(x, y, s, parent) {
  return parent
    .append("text")
    .text('')
    .style('fill', 'black')
    .style('opacity', 1)
    .attr("font-family", "sans-serif")
    .attr("font-size", s + "px")
    .attr('x', x)
    .attr('y', y)
}

//** utility to calculate perc 0 / 1 and move in [-pi/2, pi/2] */
export function percPi(v, min, max) {
  const pi = Math.PI; 
  return (pi * (v - min) / (max - min) - (pi / 2));
}
