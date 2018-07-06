import React from 'react';
import { Link } from 'react-router-dom';

import './followed.scss';
import Icons from '../../widgets/Icons';

const Followed = (props) => {
	return(	
		<div className="user-followed">
			<div className="followed">
				<div className="followed-user">
					<div className="followed-user__wrapper">

					</div>
					<div className="followed-bar" >
						<div className="followed-user__photo">
							photo
						</div>
						<div className="followed-user__butt">
							<button className="follow-button">Читать</button>
						</div>
					</div>
					<div className="followed-user__info">	
						<h3>Petro Kepka</h3>
						<p>@KepkaBest</p>
					</div>
				</div>
				<div className="followed-user">
					<div className="followed-user__wrapper">

					</div>
					<div className="followed-bar" >
						<div className="followed-user__photo">
							photo
						</div>
						<div className="followed-user__butt">
							<button className="follow-button">Читать</button>
						</div>
					</div>
					<div className="followed-user__info">	
						<h3>Petro Kepka</h3>
						<p>@KepkaBest</p>
					</div>
				</div>
				<div className="followed-user">
					<div className="followed-user__wrapper">

					</div>
					<div className="followed-bar" >
						<div className="followed-user__photo">
							photo
						</div>
						<div className="followed-user__butt">
							<button className="follow-button">Читать</button>
						</div>
					</div>
					<div className="followed-user__info">	
						<h3>Petro Kepka</h3>
						<p>@KepkaBest</p>
					</div>
				</div>
			</div>
		</div>
	)	
}

export default Followed;