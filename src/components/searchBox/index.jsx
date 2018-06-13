import React from 'react';
import * as actions from 'store/actions';

export default class extends React.Component {
	render() {
		const { searchLine, dispatch } = this.props;
		const handleChange = e => {
			dispatch(actions.applySearch(e.target.value));
		};
		return (<input type="text" value={searchLine} onChange={handleChange} />);
	}
}