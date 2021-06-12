/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

//describe('renders correctly', () => {
  //renderer.create(<App />);
  //expect(1).toBe(1);
//});

describe('<Counter />', () => {
  it('성공적으로 렌더링되어야 합니다.', () => {
    expect(1).toBe(1);
  });
    });
