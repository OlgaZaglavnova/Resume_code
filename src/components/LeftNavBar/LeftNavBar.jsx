import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import Icon from '@material-ui/icons';
import {useMediaQuery} from 'react-responsive';
//Обо мне
import FolderSharedTwoToneIcon from '@material-ui/icons/FolderSharedTwoTone';
//Образование
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
//основное
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
//дополнительное
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
//Навыки
import BuildTwoToneIcon from '@material-ui/icons/BuildTwoTone';
// Опыт работы
import TimelapseTwoToneIcon from '@material-ui/icons/TimelapseTwoTone';
// Портфолио
import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';
//Сертификаты
import ReceiptTwoToneIcon from '@material-ui/icons/ReceiptTwoTone';
//Контакты
import SpeakerPhoneTwoToneIcon from '@material-ui/icons/SpeakerPhoneTwoTone';
//Версия для печати
import PrintIcon from '@material-ui/icons/Print';

import './LeftNavBar.css';

const leftHand = "☜";
const rightHand = "☞";
export const LeftNavBar = ({myData, isOpen, setIsOpen, navIsHidden}) =>{
    //const [isOpen, setIsOpen] = useState(true);

   // console.log('LeftNavBar isScrolledDown=', isScrolledDown);

    //let headerClassName = "header"+ (isOpen || !isSmallWindow ? "" : " header--hamburger");
    
    const isSmallWindow = useMediaQuery({ query: '(max-width: 600px)' });
    let headerClassName = "header";
    let headerNavClassName = "header__nav";
    if (isSmallWindow ) {
        if (navIsHidden){
            headerClassName = "header header--uphidden";
            headerNavClassName = "header__nav header--hidden";
        } else {
            if (!isOpen) {
                headerClassName = "header header--hamburger";
                headerNavClassName = "header__nav header--hidden";
            } else {
                headerClassName = "header header--hamburger";
                headerNavClassName = "header__nav";
            }
        }
    }
    // console.log('isSmallWindow=', isSmallWindow, 'navIsHidden=', navIsHidden, 'isOpen=', isOpen);
    // console.log('headerClassName=', headerClassName, 'headerNavClassName=', headerNavClassName);

    //console.log('LeftNavBar isSmallWindow=', isSmallWindow);
    //let headerNavClassName = "header__nav" + (isOpen || !isSmallWindow ? "" : " header--hidden");

    //const educationSubitemsClassName = isOpen ? "" : " header--hidden";
    const onClickHandler = (e) => {
        //if (e.target.className === "header__hideBtn") {
            setIsOpen(!isOpen)
        //} else {
        //    setIsOpen(true)
        //}
    };

    
    return (
        <div className={headerClassName}>
            <div className="header__hideBtn" onClick={onClickHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>
            
            <nav className={headerNavClassName}>
                <ul className="header__nav--firstlevel">
                    <li onClick={onClickHandler}>
                        <NavLink to='/aboutMe' className="header__nav__link">
                            <FolderSharedTwoToneIcon className="header__icon" /><div className="header__navitem"> Обо мне</div><br/>
                        </NavLink>
                    </li>
                    <li onClick={onClickHandler}>
                        <NavLink to='/education' className="header__nav__link">
                            <MenuBookTwoToneIcon className="header__icon" /> <div className="header__navitem">Образование:</div>
                        </NavLink>
                        
                        
                    </li>
                    <li onClick={onClickHandler}>
                        <NavLink to='/qualification' className="header__nav__link">
                            <TimelapseTwoToneIcon className="header__icon" /> <div className="header__navitem">Опыт работы</div>
                        </NavLink>
                    </li>
                    <li onClick={onClickHandler}>
                        <NavLink to='/scills' className="header__nav__link">
                            <BuildTwoToneIcon className="header__icon" /> <div className="header__navitem">Навыки</div>
                        </NavLink>
                    </li>
                    <li onClick={onClickHandler}>
                        <NavLink to='/portfolio' className="header__nav__link">
                            <WorkTwoToneIcon className="header__icon" /> <div className="header__navitem">Портфолио</div>
                        </NavLink>
                    </li>
                    <li onClick={onClickHandler}>
                        <NavLink to='/sertificates' className="header__nav__link">
                            <ReceiptTwoToneIcon className="header__icon" /> <div className="header__navitem">Сертификаты</div>
                        </NavLink>
                    </li>
                    <li onClick={onClickHandler}>
                        <NavLink to='/contacts' className="header__nav__link">
                            <SpeakerPhoneTwoToneIcon className="header__icon" /> <div className="header__navitem">Контакты</div>
                        </NavLink>
                    </li>
                    <li onClick={onClickHandler}>
                        <a className = "header__nav__link" href="./src/printVersion/PrintVersion_OlgaZaglavnova_Resume.pdf" target="_blank">
                            <PrintIcon className="header__icon" />
                            <div className="header__navitem">Версия для печати</div>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
{/* <ul className="header__nav--secondlevel">
                            <NavLink to='/Resume/education/main' className="header__nav__link">
                                <li> <AccountBalanceIcon className="header__icon--small" /> <span className="header__navitem">Основное</span></li>
                            </NavLink>
                            <NavLink to='/Resume/education/additional' className="header__nav__link">
                                <li> <CastForEducationIcon className="header__icon--small" /> <span className="header__navitem">Дополнительное</span></li>
                            </NavLink>
                        </ul> */}