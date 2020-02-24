import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AnalogClock from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AnalogClock />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
