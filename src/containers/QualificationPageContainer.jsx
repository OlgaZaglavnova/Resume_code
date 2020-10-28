import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadData} from '../store/myActions';
import { QualificationPage } from '../components/QualificationPage/QualificationPage';

const mapStateToProps=({myReducer}, props)=>{
    return {
        qualification: myReducer.myData.qualification,
        isOpen: myReducer.isOpen
    };
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({loadData}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(QualificationPage);