import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import PrivateRoutes from '../components/hoc/AuthRoute/privateRoute';
import PublicRoutes from '../components/hoc/AuthRoute/publicRoute';

import Home from '../components/Home';

import Login from '../containers/login';
import Register from '../containers/register';
import Layout from '../components/hoc/Layout';
import Profile from '../components/Profile';
import Tweets from '../components/Tweets';
import Followers from '../components/Followers';
import Followed from '../components/Followed';


const Routes = (props) => {
	return(
		<Switch>
			<PublicRoutes {...props} restricted={true} path='/' exact component={Home} />
			<Layout {...props}>
				<PublicRoutes {...props} restricted={true} path='/login' exact component={Login} />
				<PublicRoutes {...props} restricted={true} path='/register' exact component={Register} />
				<Profile {...props}>
					<PrivateRoutes {...props} path='/profile/folowers' exact component={Followers} />
					<PrivateRoutes {...props} path='/profile/folowed' exact component={Followed} />
					<PrivateRoutes {...props} path='/profile/tweets' exact component={Tweets} />
				</Profile>
			</Layout>
		</Switch>
	)
}

export default Routes;