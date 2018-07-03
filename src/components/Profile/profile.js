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
						<div className="user-info" align="center">
							<span>PHOTO</span>
						</div>
						<div className="user-nav">
							<ul>
								<li>
									<Link to="/user" className="user-nav__link">
		                                <span>Твиты</span>
		                                <span><b>5</b></span>
		                            </Link>
								</li>
								<li>
									<Link to="/user/folowed" className="user-nav__link">
		                                <span>Читаемые</span>
		                                <span><b>5</b></span>
		                            </Link>
								</li>
								<li>
									<Link to="/user/folowers" className="user-nav__link">
		                                <span>Читатели</span>
		                                <span><b>5</b></span>
                            		</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="content-wrapper">
					<div className="content">
						<div className="user-info">
								<h3>Максим Руденко</h3>
								<span>@rudenko.max1</span>
								<div className="user-info__calendar">
									<span><Icons 
	                                    icon='calendar' 
	                                    size="15px" 
	                                    color="7a7a7a"
	                                    style={{margin: '0 5px 0 0'}}
                                	/></span>
									<span>Дата регистрации: 3 июля 2018</span>
								</div>
						</div>
						{this.props.children}
					</div>
				</div>
			</div>



		)	
	}

}