import React from 'react';
import Email from '../email';
import { shallow } from 'enzyme';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     
shallow(<Email />);
   });
});

// describe('Examining the syntax of Jest tests', () => {
   
  
//   it('sums numbers', () => {
        
//   expect(1 + 2).toEqual(3);
        
//   expect(2 + 2).toEqual(4);
//      });
//   });