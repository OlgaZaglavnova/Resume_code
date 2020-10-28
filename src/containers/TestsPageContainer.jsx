import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadData} from '../store/myActions';
import { TestsPage } from '../components/TestsPage/TestsPage';

const mapStateToProps=({myReducer}, props)=>{
    return {
        tests: myReducer.myData.tests,
    };
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({loadData}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TestsPage);