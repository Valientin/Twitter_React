import React from 'react';
import { Link } from 'react-router-dom';
import './tweets.scss';
import Icons from '../Icons';

export default class Tweets extends React.Component {
	render(){
		return(	
				<div className="user-tweets">
					<div className="user-tweets__title">
						<h2>Твиты</h2>
					</div>
					<div className="user-tweets__item">		
						<div className="user-tweets__photo">
							<Icons icon='user' size="45px" />
						</div>
						<div className="user-tweets__text">
							<div className="user-tweets__info">
								<span className="user-tweets__name">Максим Руденко</span>
								<span className="user-tweets__username">@MaximrudNko</span>
								<span className="user-tweets__time">- 11мин.</span>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
							<div className="user-tweets__icons">
								<Icons icon='comment' size="16px" color="#0b1c50"/>
								<Icons icon='like' size="16px" color="#0b1c50"/>
							</div>
						</div>
					</div>
					<div className="user-tweets__item">		
						<div className="user-tweets__photo">
							<Icons icon='user' size="45px" />
						</div>
						<div className="user-tweets__text">
							<div className="user-tweets__info">
								<span className="user-tweets__name">Максим Руденко</span>
								<span className="user-tweets__username">@MaximrudNko</span>
								<span className="user-tweets__time">- 11мин.</span>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
							<div className="user-tweets__icons">
								<Icons icon='comment' size="16px" color="#0b1c50"/>
								<Icons icon='like' size="16px" color="#0b1c50"/>
							</div>
						</div>
					</div>
					<div className="user-tweets__logo">
						<Icons icon='twitter' size="20px" color="#000"/>
					</div>
				</div>
		)	
	}

}