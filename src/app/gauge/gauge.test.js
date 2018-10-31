import React from 'react';
import ReactDOM from 'react-dom';
import Gauge from './gauge';
import { shallow, mount } from 'enzyme';

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
    viewBox="0 0 200 100"
    preserveAspectRatio="xMidYMid"></svg>
  expect(wrapper.containsMatchingElement(svgContainer)).toEqual(true);
});

it('snapshot test', () => {
  const wrapper = mount((
    <Gauge
      data={{
        "value": 34,
        "min": 0,
        "max": 200,
        "format": "currency",
        "unit": "GBP"
      }}>
    </Gauge>
  ));

  expect(wrapper).toMatchSnapshot();
});