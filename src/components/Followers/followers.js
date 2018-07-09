import React from 'react';

import ProfileLayout from '../../containers/profileLayout';
import './followers.scss';

const Followers = (props) => {
	return(	
		<ProfileLayout {...props}>
			<div className="user-followers">
				<div className="followers">
					<div className="follower">
						<div className="follower__wrapper">

						</div>
						<div className="follower-bar">
							<div className="follower__photo">
								photo
							</div>
							<div className="follower__butt">
								<button className="follow-button">Читать</button>
							</div>
						</div>
						<div className="follower__info">	
							<h3>Vasya Tumba</h3>
							<p>@TopTumba</p>
						</div>
					</div>
					<div className="follower">
						<div className="follower__wrapper">

						</div>
						<div className="follower-bar" >
							<div className="follower__photo">
								photo
							</div>
							<div className="follower__butt">
								<button className="follow-button">Читать</button>
							</div>
						</div>
						<div className="follower__info">	
							<h3>Petro Kepka</h3>
							<p>@KepkaBest</p>
						</div>
					</div>
					<div className="follower">
						<div className="follower__wrapper">

						</div>
						<div className="follower-bar" >
							<div className="follower__photo">
								photo
							</div>
							<div className="follower__butt">
								<button className="follow-button">Читать</button>
							</div>
						</div>
						<div className="follower__info">	
							<h3>Petro Kepka</h3>
							<p>@KepkaBest</p>
						</div>
					</div>
				</div>
			</div>
		</ProfileLayout>
	)	
}

export default Followers;