import React from 'react';
import './AboutMe.css';

export const AboutMe = ({aboutMe, languages, car, isOpen}) => {
    return (
        <div className="infoPage">
            <div className="infoPage__header">Обо мне</div>
            <div className="AboutMe scroll-y">
                <table>
                    <tbody>
                    <tr>
                        <td className="AboutMe--label">Место жительства: </td>
                        <td>{aboutMe.city}</td>
                    </tr>
                    <tr>
                        <td className="AboutMe--label">Гражданство:</td>
                        <td>{aboutMe.citizen}</td>
                    </tr>
                    <tr>
                        <td className="AboutMe--label">Пол:</td>
                        <td>{aboutMe.gender}</td>
                    </tr>
                    <tr>
                        <td className="AboutMe--label">О себе:</td>
                        <td>{aboutMe.selfInformation}</td>
                    </tr>
                    <tr>
                        <td className="AboutMe--label">Языки:</td>
                        <td>{languages.russian}<br/>{languages.english}</td>
                    </tr>
                    <tr>
                        <td className="AboutMe--label">Авто:</td>
                        <td>{car}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}