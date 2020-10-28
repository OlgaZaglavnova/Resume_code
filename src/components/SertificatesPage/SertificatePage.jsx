import React from 'react';
import './SertificatesPage.css';

import {NavLink} from 'react-router-dom';

export const SertificatePage =({sertificate, isOpen}) => {
    //console.log('SertificatesPage sertificate=', sertificate);
    const infoPageClassName = "infoPage";
    return (
        <div className={infoPageClassName}>
            <NavLink to='/sertificates' className="sertificates__link">
                <div className="sertificates__close"><i className="fa fa-times" aria-hidden="true"></i></div>
            </NavLink>
            <div className="infoPage__header">{sertificate.fullName}</div>
            <div className="sertificates__image scroll">
                <a href={sertificate.src} target="_blank"><img src={sertificate.src} alt="Sertificate" className="sertificates__large" /></a>

            </div>
            <div className="sertificates__description">
                <ul>
                    {sertificate.description.map((item, idx) => (<li key={idx}>{item}</li>))}
                </ul>
            </div>
        </div>
    )
}