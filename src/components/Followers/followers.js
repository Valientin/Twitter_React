import React from 'react';
import { Link } from 'react-router-dom';

import './followers.scss';
import Icons from '../widgets/Icons';

const Followers = (props) => {
	return(	
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
	)	
}

export default Followers;