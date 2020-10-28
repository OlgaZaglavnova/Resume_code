import React from 'react';

export const QualificationItem = ({qualificationItem}) => {
    return (
        <div className="EducationItem--itemborder">
            <div className="EducationItem__item">{qualificationItem.year}</div>
            <div className="EducationItem__item"><strong>{qualificationItem.company}</strong></div>   
            <div className="EducationItem__item"><a href={qualificationItem.companyLink} target="_blank">{qualificationItem.companyLink}</a></div>
            <div className="EducationItem__item">{qualificationItem.city}</div>
            <div className="EducationItem__item"><span className="Qualifications--smallFont">должность: </span>{qualificationItem.job}</div>
            <div className="EducationItem__item"><span className="Qualifications--smallFont">обязанности: </span>{qualificationItem.duty}</div>
        </div>
    )
}