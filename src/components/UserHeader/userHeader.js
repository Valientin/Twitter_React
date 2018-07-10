import React from 'react';

import {} from './strings';
import { checkData } from '../utils';
import './userHeader.scss';

const UserHeader = (props) => {

    const handleUnFollowedButton = () => {
        props.unFollowedOnUserFirebase(props.profileId, props.userId);
        props.unFollowedUser();
    }

    const handleFollowedButton = () => {
        props.followedOnUserFirebase(props.profileId, props.userId);
        props.followedToUser()
    }

    const showUserButton = () => (
        props.followed ?
            <button className="user-header__unfollowed" onClick={() => handleUnFollowedButton()}>Отписаться</button>
        :
            <button className="user-header__followed" onClick={() => handleFollowedButton()}>Подписаться</button>
    )

    return (
        <div className="user-header">
            <div className="container">
                <div className="user-header__right">
                    <h3>{checkData(props.userData, 'name')} {checkData(props.userData, 'lastname')}</h3>
                    {showUserButton()}
                </div>
            </div>
        </div>
    )
}


export default UserHeader;