import React from 'react';
import {SertificateItem} from './SertificateItem';
import './SertificatesPage.css';

export const SertificatesPage = ({sertificates, isOpen}) => {
    const infoPageClassName = "infoPage";
    return (
        <div className={infoPageClassName}>
            <div className="infoPage__header">Сертификаты:</div>
            <div className="sertificates scroll">
             {sertificates.map((item, idx) => <SertificateItem {...{sertificateItem: item}} idx={idx} key={idx} />)}
            </div>
        </div>
    )
}