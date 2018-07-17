import React from 'react';

import ProfileLayout from '../../containers/profileLayout';
import './followed.scss';
import FollowItem from '../FollowItem';

const Followed = (props) => {

	const getFollowed = () =>(
		props.followedData ?
		Object.keys(props.followedData).map((item,i) =>(
				<FollowItem {...props.followedData[item]} id={item} key = {i} />
			))
		:null
	)
	return(	
		<ProfileLayout {...props}>
			<div className="user-followers">
				<div className="followers">
					{getFollowed()}
				</div>
			</div>
		</ProfileLayout>
	)	
}

export default Followed;