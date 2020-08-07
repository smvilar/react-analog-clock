import React from 'react';
import AnalogClock from '../src';

const Container = ({ children }) => (
  <div style={{ height: '200px' }}>{children}</div>
);

export default {
  title: 'Analog clock',
  component: AnalogClock,
  decorators: [
    (storyFn: () => JSX.Element) => <Container>{storyFn()}</Container>,
  ],
};

export const defaultTime = () => <AnalogClock />;

export const initialTime1969 = () => (
  <AnalogClock initialTime={new Date(0).getTime()} />
);
