import React from 'react';

import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import TelegramIcon from '@material-ui/icons/Telegram';

import './ContactsPage.css';

export const ContactsPage = ({contacts, isOpen}) => {
    // console.log('QualificationPage', qualification);
    
    const infoPageClassName = "infoPage";
    return (
        <div className={infoPageClassName}>
            <div className="infoPage__header">Контакты:</div>
            <div className="scroll-y">
                <div className="contacts__item">
                    <img className="contacts_icon" src="./src/img/phone.webp" alt="phone" />
                    <img className="contacts_icon" src="./src/img/viber.webp" alt="viber" />
                    <img className="contacts_icon" src="./src/img/Whatsapp.webp" alt="wattsapp" />
                    <img className="contacts_icon" src="./src/img/telegram.webp" alt="telegram" />
                    {contacts.phone}
                </div>
                <div className="contacts__item"><img className="contacts_icon" src="./src/img/email.webp" alt="email" />{contacts.email}</div>
                <div className="contacts__item"><img className="contacts_icon" src="./src/img/skype.webp" alt="skype" />{contacts.skype}</div>
            </div>
        </div>
    )
}