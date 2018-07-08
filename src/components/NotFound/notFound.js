import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.scss';
import { title,description, link } from './strings';

const notFound = () => {
	return(
			<div className="notFound-wrapper">
				<div className="notFound-content">
					<h1>{title}</h1>
					<p>{description}</p>
					<Link to="/">
	                    <p>{link}</p>
	                </Link>				
                </div>
			</div>
		)
}
export default notFound;