import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import PrivateRoutes from '../components/hoc/AuthRoute/privateRoute';
import PublicRoutes from '../components/hoc/AuthRoute/publicRoute';

import Home from '../components/Home';
import Login from '../containers/login';
import Register from '../containers/register';
import Layout from '../components/hoc/Layout';
import Profile from '../components/Profile';
import User from '../components/User';
import NotFound from '../components/NotFound';
import Followers from '../components/Followers';
import Followed from '../components/Followed';


const Routes = (props) => {
	return(
		<Switch>
			<PublicRoutes {...props} restricted={true} path='/' exact component={Home} />
			<Layout {...props}>
				<Switch>
					<PublicRoutes {...props} restricted={true} path='/login' exact component={Login} />
					<PublicRoutes {...props} restricted={true} path='/register' exact component={Register} />
					<PrivateRoutes {...props} path='/profile' exact component={Profile} />
					<PrivateRoutes {...props} path='/profile/followers' exact component={Followers} />
					<PrivateRoutes {...props} path='/profile/followed' exact component={Followed} />
					<PrivateRoutes {...props} path='/user/:id' exact component={User} />
					<PublicRoutes {...props} restricted={false} path='*' exact component={ NotFound } />
				</Switch>
			</Layout>
			
		</Switch>
	)
}

export default Routes;