import React from 'react';
import { NavLink } from 'react-router-dom';

import Tweets from '../Tweets';

import Icons from '../widgets/Icons';

import {} from './strings';
import './user.scss';

class User extends React.Component {
	constructor(props){
		super(props);

		this.state = {}
	}

	showButtonUser = () => (
        <button className="user-header__read" >Читать</button>
    )

	showUserInfo = () => (
        <div className="user-info">
            <h3>Валентин</h3>
            <p className="user-info__data username">@ValRD</p>
            <p className="user-info__data about"></p>
            <p className="user-info__data city"></p>
            <p className="user-info__data internet"></p>
            <p className="user-info__data date"></p>
            <div className="user-info__calendar">
                <span><Icons 
                    icon='calendar' 
                    size="15px" 
                    color="7a7a7a"
                    style={{margin: '0 5px 0 0'}}
                /></span>
                <span>Регистрация: 07.07.2018</span>
            </div>
            <div className="user-info__image" ></div>
        </div>

	)

	render(){
		return(
			<div className="user-page">
				<div className="user-page__background"></div>
				<div className="user-header">
					<div className="container">
                        <h3>Валентин Куржій</h3>
						{/* <ul className="user-header__nav">
                            <li>
								<NavLink to="/user/fasdfc" exact className="user-header__link">Твиты<span>5</span></NavLink>
							</li>
							<li>
								<NavLink to="/user/fasdfc/followed" className="user-header__link">Читаемые<span>5</span></NavLink>
							</li>
							<li>
								<NavLink to="/user/fasdfc/followers" className="user-header__link">Читатели<span>5</span></NavLink>
							</li>
                        </ul> */}
                        {this.showButtonUser()}
					</div>
				</div>
				<div className="content-wrapper">
					<div className="content">
						{this.showUserInfo()}
						<Tweets />
					</div>
				</div>
			</div>
		)	
	}
}

export default User;
