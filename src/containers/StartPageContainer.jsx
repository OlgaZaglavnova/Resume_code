import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadData} from '../store/myActions';
import { StartPage } from '../components/StartPage/StartPage';

const mapStateToProps=({myReducer}, props)=>{
    return {
        sertificates: myReducer.myData.sertificates,
        isOpen: myReducer.isOpen
    };
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({loadData}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);