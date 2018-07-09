import React from 'react';

import Tweets from '../Tweets';
import ProfileLayout from '../../containers/profileLayout';

import './profile.scss';

const Profile = (props) => {
	return(
		<ProfileLayout {...props}>
			<Tweets/>
		</ProfileLayout>
	)
}

export default Profile;