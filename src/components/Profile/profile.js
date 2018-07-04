import React from 'react';
import { NavLink, Switch, Recirect } from 'react-router-dom';
import { Redirect } from 'react-router'
import PrivateRoutes from '../hoc/AuthRoute/privateRoute';
import Tweets from '../Tweets';
import Followers from '../Followers';
import Followed from '../Followed';
import NotFound from '../NotFound';

import './profile.scss';
import Icons from '../Icons';

class Profile extends React.Component {

	render(){
		return(
			<div className="root-wrapper-user">
				<div className="user-wrapper">
				</div>
				<div className="user-header-wrapper">
					<div className="user-header">
						<ul className="user-nav">
							<li>
								<NavLink to="/profile/tweets" className="user-nav__link">Твиты<span>5</span></NavLink>
							</li>
							<li>
								<NavLink to="/profile/followed" className="user-nav__link">Читаемые<span>5</span></NavLink>
							</li>
							<li>
								<NavLink to="/profile/followers" className="user-nav__link">Читатели<span>5</span></NavLink>
							</li>
						</ul>
						<button className="user-header__change">Изменить профиль</button>
					</div>
				</div>
				<div className="content-wrapper">
					<div className="content">
						<div className="user-info">
								<h3>Максим Руденко</h3>
								<span className="user-info__username">@rudenko.max1</span>
								<div className="user-info__calendar">
									<span><Icons 
	                                    icon='calendar' 
	                                    size="15px" 
	                                    color="7a7a7a"
	                                    style={{margin: '0 5px 0 0'}}
                                	/></span>
									<span>Регистрация: 3 июля 2018</span>
								</div>
								<div className="user-info__image"></div>
						</div>
						<Switch>
							<PrivateRoutes {...this.props} path='/profile/followers' exact component={Followers} />
							<PrivateRoutes {...this.props} path='/profile/followed' exact component={Followed} />
							<PrivateRoutes {...this.props} path='/profile/tweets' exact component={Tweets} />	
							<Redirect from='/profile/*' to='/404'/>
						</Switch>
					</div>
				</div>
			</div>
		)	
	}
}

export default Profile;