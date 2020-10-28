import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadData} from '../store/myActions';
import { AboutMe } from '../components/AboutMe/AboutMe';

const mapStateToProps=({myReducer}, props)=>{
    return {
        aboutMe: myReducer.myData.aboutMe,
        languages: myReducer.myData.languages,
        car: myReducer.myData.car,
        isOpen: myReducer.isOpen
    };
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({loadData}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);