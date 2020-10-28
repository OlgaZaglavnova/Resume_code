import React from 'react';
import {NavLink} from 'react-router-dom';

export const PortfolioItem = ({portfolioItem, idx}) => {
    return (
        <div className="portfolio__item">
                <a href={portfolioItem.demolink} target="_blank">
                    <div className="portfolio__img"><img src={portfolioItem.src} alt="portfolio-work" className="portfolio__img--size" /></div>
                </a>
                <div >{portfolioItem.school}</div>
                <div className="portfolio__item--date">{portfolioItem.course}</div>
                <div className="portfolio__item--name">{portfolioItem.workName}</div>
                <div className="portfolio__item--link"><a href={portfolioItem.demolink} target="_blank">Демонстрация</a></div>
                <div className="portfolio__item--link"><a href={portfolioItem.codelink} target="_blank">Исходный код</a></div>
                <div className="portfolio__item--comment">{portfolioItem.comment}</div>
        </div>
    )
}