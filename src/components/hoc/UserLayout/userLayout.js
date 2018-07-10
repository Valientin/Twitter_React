import React from 'react';

import UserHeader from '../../UserHeader';
import UserInfo from '../../UserInfo';
import './userLayout.scss';

const UserLayout = (props) => {
    return(
		<div className="user-page">
			<div className="user-page__background"></div>
			<UserHeader
				profileId={props.profileId}
				followed={props.followed} 
				userData={props.userData}
				userId={props.userId}
				followedToUser={props.followedToUser}
				unFollowedUser={props.unFollowedUser}
				followedOnUserFirebase={props.followedOnUserFirebase}
				unFollowedOnUserFirebase={props.unFollowedOnUserFirebase}
			/>
			<div className="content-wrapper">
				<div className="content">
					<UserInfo userData={props.userData} />
					{props.children}
				</div>
			</div>
		</div>
	)	
}

export default UserLayout;