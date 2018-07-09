import React from 'react';

import {} from './strings';
import './userHeader.scss';

const UserHeader = (props) => {

    const showUserButton = (folowedUser) => (
        folowedUser ?
            <button className="user-header__followed" >Подписаться</button>
        :
            <button className="user-header__unfollowed" >Отписаться</button>
    )

    return (
        <div className="user-header">
            <div className="container">
                <div className="user-header__right">
                    <h3>Валентин Куржій</h3>
                    {showUserButton(true)}
                </div>
            </div>
        </div>
    )
}


export default UserHeader;