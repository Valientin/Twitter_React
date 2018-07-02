import React from 'react';
import { Switch } from 'react-router-dom';
// import PrivateRoutes from '../components/hoc/AuthRoute/privateRoute';
import PublicRoutes from '../components/hoc/AuthRoute/publicRoute';

import Home from '../components/Home';
import Header from '../components/hoc/Header';

const Routes = (props) => {
	return(
		<Switch>
			<PublicRoutes {...props} restricted={false} path='/' exact component={Home} />
			<PublicRoutes {...props} restricted={false} path='/home' exact component={Header} />
		</Switch>
	)
}

export default Routes;