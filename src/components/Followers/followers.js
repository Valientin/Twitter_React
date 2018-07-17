import React from 'react';

import ProfileLayout from '../../containers/profileLayout';
import './followers.scss';
import FollowItem from '../FollowItem';

const Followers = (props) => {

	const getFollower = () =>(
		props.followersData ?
		Object.keys(props.followersData).map((item,i) =>(
				<FollowItem {...props.followersData[item]} id={item} key = {i} />
			))
		:null
	)
	return(	
		<ProfileLayout {...props}>
			<div className="user-followers">
				<div className="followers">
					{getFollower()}
				</div>
			</div>
		</ProfileLayout>
	)	
}

export default Followers;