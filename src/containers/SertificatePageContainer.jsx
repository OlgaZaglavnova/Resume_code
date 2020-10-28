import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadData} from '../store/myActions';
import { SertificatePage } from '../components/SertificatesPage/SertificatePage';

const mapStateToProps=({myReducer}, props)=>{
    //console.log('SertificatePageContainer props=', props);
    const id= props.match.params.id;
    return {
        sertificate: myReducer.myData.sertificates[id],
        isOpen: myReducer.isOpen
    };
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({loadData}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SertificatePage);