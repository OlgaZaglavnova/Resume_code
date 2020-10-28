import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadData} from '../store/myActions';
import { ScillsPage } from '../components/ScillsPage/ScillsPage';

const mapStateToProps=({myReducer}, props)=>{
    return {
        scills: myReducer.myData.mainScills,
        isOpen: myReducer.isOpen
    };
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({loadData}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ScillsPage);