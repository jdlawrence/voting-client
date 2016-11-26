import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];



ReactDOM.render(
  <Voting pair={pair} />,
  // <h1>Hello World!</h1>,
  document.getElementById('app')
);

