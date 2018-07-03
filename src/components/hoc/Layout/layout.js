import React from 'react';
import Header from '../../../containers/header';

const Layout = (props) => {
	return(
		<div>
			<Header {...props}/>
			{props.children}
		</div>
	)
}
export default Layout


