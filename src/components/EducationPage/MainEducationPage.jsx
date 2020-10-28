import React from 'react';
import {MainEducationItem} from './MainEducationItem';

export const MainEducationPage = ({mainEducation, isOpen}) => {
    const infoPageClassName = "infoPage";
    return (
        <div className={infoPageClassName}>
            <div className="infoPage__header">Базовое образование</div>
            <MainEducationItem mainEducation={mainEducation} />
        </div>
    )
}