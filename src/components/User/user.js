import React from 'react';

import Tweets from '../Tweets';

import UserHeader from './UserHeader';
import UserInfo from './UserInfo';

import {} from './strings';
import './user.scss';

class User extends React.Component {
	constructor(props){
		super(props);

		this.state = {}
	}

	render(){
		return(
			<div className="user-page">
				<div className="user-page__background"></div>
				<UserHeader />
				<div className="content-wrapper">
					<div className="content">
						<UserInfo />
						<Tweets />
					</div>
				</div>
			</div>
		)	
	}
}

export default User;
