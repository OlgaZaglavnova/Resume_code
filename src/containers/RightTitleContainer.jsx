import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadData} from '../store/myActions';
import {RightTitle} from '../components/RightTitle/RightTitle';

const mapStateToProps=({myReducer}, props)=>{
    // console.log('RightTitleContainer', myReducer);
    return {
        name: myReducer.myData.name,
        birthdate: myReducer.myData.birthdate,
        wishJob: myReducer.myData.wishJob,
        isOpen: myReducer.isOpen
    };
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({loadData}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RightTitle);