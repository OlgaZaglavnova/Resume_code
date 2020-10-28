import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadData} from '../store/myActions';
import { MainEducationPage } from '../components/EducationPage/MainEducationPage';

const mapStateToProps=({myReducer}, props)=>{
    return {
        mainEducation: myReducer.myData.mainEducation,
        isOpen: myReducer.isOpen
    };
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({loadData}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainEducationPage);