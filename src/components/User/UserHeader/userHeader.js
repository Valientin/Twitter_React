import React from 'react';

import {} from './strings';

const UserHeader = (props) => {

    const showUserButton = () => (
        <button className="user-header__read" >Подписаться</button>
    )

    return (
        <div className="user-header">
            <div className="container">
                <h3>Валентин Куржій</h3>
                {showUserButton()}
            </div>
        </div>
    )
}


export default UserHeader;