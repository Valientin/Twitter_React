import React from 'react';
import { Link } from 'react-router-dom';

import './tweets.scss';
import Icons from '../Icons';




export default class Tweets extends React.Component {



	render(){
		return(	
				<div className="user-tweets">
					<div className="tweets-title">
						<h2>Твиты</h2>
					</div>
					<div className="tweet">		
						<div className="tweet__photo">
							photo
						</div>
						<div className="tweet__text">
							<h3>Максим Руденко</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis hendrerit tellus, at lacinia nisl fringilla sed. In maximus porttitor ipsum ut aliquam. Morbi venenatis nec massa et euismod. Ut sit amet ullamcorper nulla. Integer gravida sed augue mattis venenatis. Cras pellentesque turpis dui, sit amet tempor metus aliquam eget. Nulla gravida lectus at rutrum vehicula. Vivamus tincidunt diam consectetur eros vulputate, a euismod velit cursus</p>
						</div>
					</div>
					<div className="tweet">		
						<div className="tweet__photo">
							photo
						</div>
						<div className="tweet__text">
							<h3>Максим Руденко</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis hendrerit tellus, at lacinia nisl fringilla sed. In maximus porttitor ipsum ut aliquam. Morbi venenatis nec massa et euismod. Ut sit amet ullamcorper nulla. Integer gravida sed augue mattis venenatis. Cras pellentesque turpis dui, sit amet tempor metus aliquam eget. Nulla gravida lectus at rutrum vehicula. Vivamus tincidunt diam consectetur eros vulputate, a euismod velit cursus</p>
						</div>
					</div>
				</div>
		)	
	}

}