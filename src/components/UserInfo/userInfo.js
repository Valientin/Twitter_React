import React from 'react';

import Icons from '../widgets/Icons';
import {} from './strings';
import './userInfo.scss';

const UserInfo = (props) => {

    return (
        <div className="user-info">
            <h3>Валентин</h3>
            <p className="user-info__data username">@ValRD</p>
            <p className="user-info__data about"></p>
            <p className="user-info__data city"></p>
            <p className="user-info__data internet"></p>
            <p className="user-info__data date"></p>
            <div className="user-info__calendar">
                <span><Icons 
                    icon='calendar' 
                    size="15px" 
                    color="7a7a7a"
                    style={{margin: '0 5px 0 0'}}
                /></span>
                <span>Регистрация: 07.07.2018</span>
            </div>
            <div className="user-info__image-wrapper">
                <div className="user-info__image" ></div>
            </div>
        </div>
    )
}

export default UserInfo;