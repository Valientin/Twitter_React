import React from 'react';
import { Link } from 'react-router-dom';

import './profile.scss';
import Icons from '../Icons';




export default class Profile extends React.Component {



	render(){
		return(
			<div className="root-wrapper-user">
				<div className="user-wrapper">

				</div>
				<div className="user-header-wrapper">
					<div className="user-header">
						<div className="user-info">

						</div>
						<div className="user-nav">

						</div>
					</div>
				</div>
				<div className="content-wrapper">
					<div className="content">
						<div className="user-info">
							<div>

							</div>
						</div>
						<div className="user-tweets">

						</div>
					</div>
				</div>
			</div>



		)	
	}

}