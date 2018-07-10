import React from 'react';

import Tweets from '../../containers/tweets';
import ProfileLayout from '../../containers/profileLayout';

import './profile.scss';

const Profile = (props) => {
	return(
		<ProfileLayout {...props}>
			<Tweets id={props.user.uid}/>
		</ProfileLayout>
	)
}

export default Profile;