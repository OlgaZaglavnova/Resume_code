import React from 'react';
import {PortfolioItem} from './PortfolioItem';
import './PortfolioPage.css';

export const PortfolioPage = ({portfolio_geekbrains, isOpen}) => {
    const infoPageClassName = "infoPage";
    return (
        <div className={infoPageClassName}>
            <div className="infoPage__header">Портфолио:</div>
            <div className="portfolio scroll">
                <div className="portfolio__header">Учебные работы:</div>
             {portfolio_geekbrains.map((item, idx) => <PortfolioItem {...{portfolioItem: item}} idx={idx} key={idx} />)}
            </div>
        </div>
    )
}