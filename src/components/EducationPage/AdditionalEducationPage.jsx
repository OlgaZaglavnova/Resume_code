import React from 'react';
import {AdditionalEducationItem} from './AdditionalEducationItem';

export const AdditionalEducationPage = ({additionalEducation, isOpen}) => {
    const infoPageClassName = "infoPage";
    return (
        <div className={infoPageClassName}>
            <div className="infoPage__header">Дополнительное образование</div>
            <div className="scroll-y">
                {Object.keys(additionalEducation).map((ItemId, idx) => <AdditionalEducationItem {...{additionalEducationItem: additionalEducation[ItemId]}} idx={idx} key={idx} />)}
            </div>
        </div>
    )
}