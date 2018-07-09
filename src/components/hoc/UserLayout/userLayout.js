import React from 'react';

import UserHeader from '../../UserHeader';
import UserInfo from '../../UserInfo';
import './userLayout.scss';

const UserLayout = (props) => {

    return(
		<div className="user-page">
			<div className="user-page__background"></div>
			<UserHeader />
			<div className="content-wrapper">
				<div className="content">
					<UserInfo />
					{props.children}
				</div>
			</div>
		</div>
	)	
}

export default UserLayout;