import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadData} from '../store/myActions';
import { ContactsPage } from '../components/ContactsPage/ContactsPage';

const mapStateToProps=({myReducer}, props)=>{
    return {
        contacts: myReducer.myData.contacts,
        isOpen: myReducer.isOpen
    };
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({loadData}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);