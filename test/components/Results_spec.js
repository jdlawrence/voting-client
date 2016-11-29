import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';
import {List, Map} from 'immutable';
import Results from '../../src/components/Results';
import {expect} from 'chai';

describe('Results', () => {

  it('renders entries with vote counts or zero', () => {
    const pair = List.of('Trainspotting', '28 Days Later');
    const tally = Map({'Trainspotting': 5});
    const component = renderIntoDocument(
      <Results pair={pair} tally={tally} />
    );

    // search for a DOM element within 'component' with a className of entry
    const entries = scryRenderedDOMComponentsWithClass(component, 'entry')
    console.log('entries: ', Object.keys(entries[0]));
    const [train, days] = entries.map(e => e.textContext);
    console.log('train: ', train);
    expect(entries.length).to.equal(2);
    expect(train).to.contain('Trainspotting');
    // expect(train).to.contain('5');
    // expect(days).to.contain('28 Days Later');
    // expect(days).to.contain('0');
  });

});