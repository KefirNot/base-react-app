import React from 'react';
import { A } from './a';

export class Comp extends React.Component {
	render() {
		console.log('updating...');
		var title = 'It worksssssss!!!';
		return <div>{title}<A /></div>;
	}
}