import React from 'react';
import ReactDOM from 'react-dom';
import Gauge from './gauge';
import { shallow } from 'enzyme';

it('renders Gauge without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Gauge />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders gauge with svg"', () => {
  const wrapper = shallow((
        <Gauge></Gauge>
      ));
  const svgContainer = <svg className="svg-container" 
    viewBox="0 0 200 200"
    preserveAspectRatio="xMidYMid"></svg>
  expect(wrapper.containsMatchingElement(svgContainer)).toEqual(true);
});