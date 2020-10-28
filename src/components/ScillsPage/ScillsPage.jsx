import React from 'react';
import {ScillsItem} from './ScillsItem';

export const ScillsPage = ({scills, isOpen}) => {
    //console.log('ScillsPage', scills);
    const infoPageClassName = "infoPage";
    return (
        <div className={infoPageClassName}>
            <div className="infoPage__header">Навыки:</div>
            <div className="scroll-y scroll">
                {Object.keys(scills).map((item, idx) => <ScillsItem {...{scillsItem: scills[item]}} idx={idx} key={idx} />)}
            </div>
        </div>
    )
}