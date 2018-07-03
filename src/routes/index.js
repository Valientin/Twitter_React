import React from 'react';
import { Switch } from 'react-router-dom';
// import PrivateRoutes from '../components/hoc/AuthRoute/privateRoute';
import PublicRoutes from '../components/hoc/AuthRoute/publicRoute';

import Home from '../components/Home';

import Login from '../containers/login';
import Layout from '../components/hoc/Layout';


const Routes = (props) => {
	return(
		<Switch>
			<PublicRoutes {...props} restricted={false} path='/' exact component={Home} />
			<Layout>
				<PublicRoutes {...props} restricted={true} path='/login' exact component={Login} />
			</Layout>
		</Switch>
	)
}

export default Routes;