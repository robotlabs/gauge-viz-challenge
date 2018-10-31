export function createText(x, y, s, parent, id) {
  return parent
    .append("text")
    .text('')
    .attr('id', id)
    .style('fill', 'black')
    .style('opacity', 1)
    .attr("font-family", "sans-serif")
    .attr("font-size", s + "px")
    .attr('x', x)
    .attr('y', y)
}