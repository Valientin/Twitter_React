import { connect } from 'react-redux';
import Register from '../components/Register';

import { registerUser }  from '../app/actions/log';


function mapDispatchToProps(dispatch){
    return {
        registerUser: (data) => dispatch(registerUser(data))
    }
}

const mapStateToProps = (state) => {
    return {
        log: state.log
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);