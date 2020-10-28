import React from 'react';
import {NavLink} from 'react-router-dom';

export const SertificateItem = ({sertificateItem, idx}) => {
    const sertificatePath = '/sertificates/' + idx;
    // console.log('SertificateItem', idx, sertificatePath);
    return (
        <div className="sertificates__item">
             <NavLink to={sertificatePath}>
                <div className="sertificates__img"><img src={sertificateItem.src} alt="sertificate" className="sertificates__img--size" /></div>
                <div >{sertificateItem.school}</div>
                <div className="sertificates__item--date">{sertificateItem.date}</div>
                <div className="sertificates__item--name">{sertificateItem.fullName}</div>
            </NavLink>
        </div>
    )
}