import React from 'react';
import {render} from '@testing-library/react';
import HelloWorld from '../components/HelloWorld';

describe('HelloWorld', () => {
	const testMessage = 'Hello World';
	const context = render(<HelloWorld />);

	it('displays hello world', () => {
		let {queryByText} = context;
		expect(queryByText(testMessage)).not.toBeNull();
	});
});
