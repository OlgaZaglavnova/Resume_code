import React from 'react';

import './RightTitle.css';

export const RightTitle = ({name, birthdate, wishJob, isOpen}) =>{

    return (
        <div className="rightTitle">
            <div className="rightTitle__photo">
                
            </div>
            <div className="rightTitle__personal">
                <div className="rightTitle__name">{name}</div>
                <div className="rightTitle__age">
                    <span className="rightTitle__age--title">дата рождения: </span><br/>{birthdate}
                </div>
                <div className="rightTitle__info">
                    <table>
                        <tbody>
                            <tr>
                                <td className='rightTitle--smallFont rightTitle--tableLeft'>Желаемая должность:</td>
                                <td className='rightTitle--bigFont'>{wishJob.name}</td>
                            </tr>
                            <tr>
                                <td className='rightTitle--smallFont rightTitle--tableLeft'>Опыт работы:</td>
                                <td className='rightTitle--bigFont'>{wishJob.expirience}</td>
                            </tr>
                            <tr>
                                <td className='rightTitle--smallFont rightTitle--tableLeft'>Занятость:</td>
                                <td className='rightTitle--bigFont'>{wishJob.workday}</td>
                            </tr>
                            <tr>
                                <td className='rightTitle--smallFont rightTitle--tableLeft'>График работы:</td>
                                <td className='rightTitle--bigFont'>{wishJob.schedule}</td>
                            </tr>
                        </tbody>
                    </table>
                   </div>
            </div>
            
            
        </div>
    );
}

{/* <img className="rightTitle__photo--img" src="./src/img/myPhoto1.jpg" alt="myPhoto" /> */}