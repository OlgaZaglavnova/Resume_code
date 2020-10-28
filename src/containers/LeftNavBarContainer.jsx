import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setIsOpen} from '../store/myActions';
import {LeftNavBar} from '../components/LeftNavBar/LeftNavBar';

const mapStateToProps=({myReducer}, props)=>{
    return {
        myData: myReducer.myData,
        isOpen: myReducer.isOpen,
        navIsHidden: myReducer.navIsHidden
    };
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({setIsOpen}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftNavBar);