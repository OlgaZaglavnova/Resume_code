import React from 'react';

export const AdditionalEducationItem = ({additionalEducationItem}) => {
    return (
        <div className="EducationItem--itemborder">
            <div className="EducationItem__item">{additionalEducationItem.year}</div>
            <div className="EducationItem__item">{additionalEducationItem.institute}</div>   
            <div className="EducationItem__item">{additionalEducationItem.courseName}</div>
        </div>
    )
}