import React from 'react';

export default class extends React.Component {
    filterData = (data, searchLine = null) => {
        if (searchLine === null) return data;
        return data.filter(item => item.toLowerCase().indexOf(searchLine.toLowerCase()) >= 0) || [];
    }

    render() {
        const { data, searchLine } = this.props;
        const items = this.filterData(data, searchLine).map((item, i) => <li key={i}>{item}</li>);
        return (
            <ul>
                {items}
            </ul>
        );
    }
}