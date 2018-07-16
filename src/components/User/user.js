import React from 'react';

import UserLayout from '../hoc/UserLayout';
import Tweets from '../../containers/tweets';

import {} from './strings';
import './user.scss';

const User = (props) => {
	return(
		<UserLayout
			profileId={props.user.uid}
			userData={props.userData.userData}
			userId={props.match.params.id}
			followed={props.followedUser} 
			followedToUser={props.followedToUser}
			unFollowedUser={props.unFollowedUser}
			followedOnUserFirebase={props.followedOnUserFirebase}
			unFollowedOnUserFirebase={props.unFollowedOnUserFirebase}
		>
			<Tweets id={props.match.params.id} profileId={props.user.uid}/>
		</UserLayout>
	)
}


export default User;
