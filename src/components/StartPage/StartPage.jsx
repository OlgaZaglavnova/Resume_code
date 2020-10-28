import React from 'react';
import { SertificateItem } from '../SertificatesPage/SertificateItem';

export const StartPage = ({sertificates, isOpen}) => {
    return (
        <div className="infoPage scroll-y">
            <div>Здравствуйте, дорогие товарищи! Добро пожаловать в мое резюме =)</div>
            <div>Hello, Mr or Mrs! You are welcome to my CV</div><br />
            <div>Новости: <b>я закончила курсы Frontend-разрабочик на GeekBrains.ru и получила сертификат:</b>
                <SertificateItem {...{sertificateItem: sertificates[sertificates.length - 1]}} idx={sertificates.length - 1} />
            </div>
        </div>
    )
}