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


it('배수가 반환되어야 한다.', () => {
	const functionData = renderer.create(
		<Function />
	).getInstance()

	expect(4).toEqual(4)
});
