import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import './style.scss';

const filterData = (data, searchLine = null) => {
	if (searchLine === null) return data;
	return data.filter(item => item.toLowerCase().indexOf(searchLine.toLowerCase()) >= 0) || [];

};

class DataList extends React.Component {
	render() {
		const { data, searchLine } = this.props;
		const items = filterData(data, searchLine).map((item, i) => <li key={i}>{item}</li>);
		return (
			<ul>
				{items}
			</ul>
		);
	}
}

class SearchBox extends React.Component {
	render() {
		const { searchLine, dispatch } = this.props;
		const handleChange = e => {
			dispatch(actions.applySearch(e.target.value));
		};
		return (<input type="text" value={searchLine} onChange={handleChange} />);
	}
}

class View extends React.Component {
	render() {
		return (
			<div>
				<h3>Japan cars</h3>
				<SearchBox {...this.props} />
				<DataList {...this.props} />
			</div>
		);
	}
}

export default connect(state => state)(View);