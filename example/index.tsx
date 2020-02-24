import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AnalogClock from '../.';

const App = () => {
  return (
    <div>
      <AnalogClock />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
