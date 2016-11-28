import React from 'react';
import ReactDOM from 'react-dom';
import Vote from './components/Vote';

const pair = ['Trainspotting', '28 Days Later'];



ReactDOM.render(
  // <Voting pair={pair} hasVoted="Trainspotting" />,
  <Vote pair={pair} winner="Trainspotting" />,
  document.getElementById('app')
);

