import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import SearchBox from 'components/searchBox';
import DataList from 'components/dataList';

class CarSearch extends React.Component {
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

export default connect(state => state)(CarSearch);