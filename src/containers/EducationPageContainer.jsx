import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadData} from '../store/myActions';
import { EducationPage } from '../components/EducationPage/EducationPage';

const mapStateToProps=({myReducer}, props)=>{
    return {
        mainEducation: myReducer.myData.mainEducation,
        additionalEducation: myReducer.myData.additionalEducation,
        isOpen: myReducer.isOpen
    };
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({loadData}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EducationPage);