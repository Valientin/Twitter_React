import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import PrivateRoutes from '../components/hoc/AuthRoute/privateRoute';
import PublicRoutes from '../components/hoc/AuthRoute/publicRoute';

import Home from '../components/Home';

import Login from '../containers/login';
import Register from '../containers/register';
import Layout from '../components/hoc/Layout';
import Profile from '../components/Profile';


const Routes = (props) => {
	return(
		<Switch>
			<PublicRoutes {...props} restricted={true} path='/' exact component={Home} />
			<Layout {...props}>
				<PublicRoutes {...props} restricted={true} path='/login' exact component={Login} />
				<PublicRoutes {...props} restricted={true} path='/register' exact component={Register} />
				<PrivateRoutes {...props} restricted={true} path='/profile*' exact component={Profile} />
			</Layout>
		</Switch>
	)
}

export default Routes;