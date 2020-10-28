import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadData} from '../store/myActions';
import { PortfolioPage } from '../components/PortfolioPage/PortfolioPage';

const mapStateToProps=({myReducer}, props)=>{
    return {
        portfolio_geekbrains: myReducer.myData.portfolio_geekbrains,
        isOpen: myReducer.isOpen
    };
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({loadData}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPage);