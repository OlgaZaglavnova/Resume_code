import React from 'react';
import './EducationPage.css';

export const MainEducationItem = ({mainEducation}) => {
    return (
            <div className="EducationItem scroll-y" > 
                <div className="EducationItem__title">Высшее</div> 
                <div className="EducationItem--itemborder">
                    <div className="EducationItem__item">{mainEducation.year}</div>
                    <div className="EducationItem__item">{mainEducation.institute}</div>
                    <div className="EducationItem__item">{mainEducation.faculty}</div>
                </div>
            </div>
    )
}