import React from 'react';

import {MainEducationItem} from './MainEducationItem';
import {AdditionalEducationItem} from './AdditionalEducationItem';

export const EducationPage = ({mainEducation, additionalEducation, isOpen}) => {
    // console.log("MainEducationPage mainEducation=", mainEducation, 'additionalEducation=', additionalEducation);
    return (
        <div className="infoPage">
            <div className="infoPage__header">Образование</div>
            <div className="Education scroll-y">
                <MainEducationItem mainEducation={mainEducation}/>
                <div className="EducationItem">
                    <div className="EducationItem__title">Дополнительное:</div>
                    {Object.keys(additionalEducation).map((ItemId, idx) => <AdditionalEducationItem {...{additionalEducationItem: additionalEducation[ItemId]}} idx={idx} key={idx} />)}
                </div>
            </div>
        </div>
    )
}