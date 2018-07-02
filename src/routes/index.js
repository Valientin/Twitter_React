import React from 'react';
import { Switch } from 'react-router-dom';
// import PrivateRoutes from '../components/hoc/AuthRoute/privateRoute';
import PublicRoutes from '../components/hoc/AuthRoute/publicRoute';

import Home from '../components/Home';
import Layout from '../components/hoc/Layout';

const Routes = (props) => {
	return(
		<Switch>
			<Layout>
				<PublicRoutes {...props} restricted={false} path='/' exact component={Home} />
			</Layout>	
		</Switch>
	)
}

export default Routes;