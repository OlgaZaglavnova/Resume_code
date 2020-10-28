import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadData} from '../store/myActions';
import { AdditionalEducationPage } from '../components/EducationPage/AdditionalEducationPage';

const mapStateToProps=({myReducer}, props)=>{
    return {
        additionalEducation: myReducer.myData.additionalEducation,
        isOpen: myReducer.isOpen
    };
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({loadData}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalEducationPage);