import React from 'react';

import moment from 'moment';
import Icons from '../widgets/Icons';
import { checkData } from '../utils';
import {} from './strings';
import './userInfo.scss';

const UserInfo = (props) => {

    const showPersonalData = (option) => ( 
        props.userData[option] ?
            <p className={`profile-info__data ${option}`}>{checkData(props.userData, option)}</p>
        : ''
    )
    
    return (
        <div className="user-info">
            <h3>{checkData(props.userData, 'name')}</h3>
            <p className="user-info__data username">@{checkData(props.userData, 'userName')}</p>
            {showPersonalData('about')}
            {showPersonalData('city')}
            {showPersonalData('internet')}
            {showPersonalData('date')}
            <div className="user-info__calendar">
                <span><Icons 
                    icon='calendar' 
                    size="15px" 
                    color="7a7a7a"
                    style={{margin: '0 5px 0 0'}}
                /></span>
                <span>{checkData(props.userData, 'creationTime')}</span>
            </div>
            <div className="user-info__image-wrapper">
                <div className="user-info__image" style={{
                    background: checkData(props.userData, 'imageProfile')}}
                ></div>
            </div>
        </div>
    )
}

export default UserInfo;