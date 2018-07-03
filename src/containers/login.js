import { connect } from 'react-redux';
import Login from '../components/Login';

import { loginUser }  from '../app/actions/log';


function mapDispatchToProps(dispatch){
    return {
        loginUser: (data) => dispatch(loginUser(data))
    }
}

const mapStateToProps = (state) => {
    return {
        log: state.log
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);