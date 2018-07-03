import React from 'react';
import { Switch } from 'react-router-dom';
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
				<PrivateRoutes {...props} path='/profile' exact component={Profile} />
				<Profile {...props}>
					<PrivateRoutes {...props} path='/user' exact component={Tweets} />
					<PrivateRoutes {...props} path='/user/folowers' exact component={Followers} />
					<PrivateRoutes {...props} path='/user/folowed' exact component={Followed} />
				</Profile	>
			</Layout>
		</Switch>
	)
}

export default Routes;