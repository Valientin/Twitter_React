import { connect } from 'react-redux';
import Header from '../components/Header';

import { logout }  from '../app/actions/log';


function mapDispatchToProps(dispatch){
    return {
        logout: () => dispatch(logout())
    }
}

const mapStateToProps = (state) => {
    return {
        log: state.log
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);