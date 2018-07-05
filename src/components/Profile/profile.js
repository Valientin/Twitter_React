import React from 'react';
import { NavLink, Switch } from 'react-router-dom';
import moment from 'moment';
import { Redirect } from 'react-router'
import PrivateRoutes from '../hoc/AuthRoute/privateRoute';
import Tweets from '../Tweets';
import Followers from '../Followers';
import Followed from '../Followed';

import './profile.scss';
import Icons from '../Icons';

class Profile extends React.Component {
	

	componentDidMount(){
		this.props.getProfileData(this.props.user.uid);
	}


	checkData(option, number = false){
		const profileData = this.props.profileData;
		if(number) {
			return profileData[option] ? '0' : '0'
		}
		return profileData[option] ? profileData[option] : ''
	}

	render(){
		const profileData = this.props.profileData;

		return(
			<div className="root-wrapper-user">
				<div className="user-wrapper" >
				</div>
				<div className="user-header-wrapper">
					<div className="user-header">
						<ul className="user-nav">
							<li>
								<NavLink to="/profile/" exact className="user-nav__link">Твиты<span>{this.checkData('tweets',true)}</span></NavLink>
							</li>
							<li>
								<NavLink to="/profile/followed" className="user-nav__link">Читаемые<span>{this.checkData('followed',true)}</span></NavLink>
							</li>
							<li>
								<NavLink to="/profile/followers" className="user-nav__link">Читатели<span>{this.checkData('followers',true)}</span></NavLink>
							</li>
						</ul>
						<button className="user-header__change">Изменить профиль</button>
					</div>
				</div>
				<div className="content-wrapper">
					<div className="content">
						<div className="user-info">
								<h3>{`${this.checkData('name')} ${this.checkData('lastname')}`}</h3>
								<span className="user-info__username">{`@${this.checkData('userName')}`}</span>
								<div className="user-info__calendar">
									<span><Icons 
	                                    icon='calendar' 
	                                    size="15px" 
	                                    color="7a7a7a"
	                                    style={{margin: '0 5px 0 0'}}
                                	/></span>
									<span>
										{`Регистрация: ${moment(this.props.user.metadata.creationTime).format("DD MMM YYYY")}`}
									</span>
								</div>
								<div className="user-info__image"></div>
						</div>
						<Switch>
							<PrivateRoutes user={this.props.user} path='/profile/followers' exact component={Followers} />
							<PrivateRoutes user={this.props.user} path='/profile/followed' exact component={Followed} />
							<PrivateRoutes user={this.props.user} path='/profile' exact component={Tweets} />	
							<Redirect from='/profile/*' to='/404'/>
						</Switch>
					</div>
				</div>
			</div>
		)	
	}
}

export default Profile;