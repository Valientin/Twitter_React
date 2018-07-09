import React from 'react';

import UserLayout from '../hoc/UserLayout';
import Tweets from '../Tweets';

import {} from './strings';
import './user.scss';

const User = (props) => {
	return(
		<UserLayout>
			<Tweets />
		</UserLayout>
	)
}


export default User;
