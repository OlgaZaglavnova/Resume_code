import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadData} from '../store/myActions';
import { TestPage } from '../components/TestsPage/TestPage';

const mapStateToProps=({myReducer}, props)=>{
    const id= props.match.params.id;
    return {
        test: myReducer.myData.tests[id],
    };
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({loadData}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);