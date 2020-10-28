import React from 'react';
import {QualificationItem} from './QualificationItem';
import './QualificationPage.css';

export const QualificationPage = ({qualification, isOpen}) => {
    // console.log('QualificationPage', qualification);
    return (
        <div className="infoPage">
            <div className="infoPage__header">Опыт работы:</div>
            <div className="Qualifications scroll-y">
                {Object.keys(qualification).map((ItemId, idx) => <QualificationItem {...{qualificationItem: qualification[ItemId]}} idx={idx} key={idx} />)}
            </div>
        </div>
    )
}