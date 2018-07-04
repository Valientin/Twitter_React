import { connect } from 'react-redux';
import Header from '../components/Header';
import { GET_PROFILE_DATA } from '../app/actions/actionTypes';
import { logout }  from '../app/actions/log';


function mapDispatchToProps(dispatch){
    return {
        logout: () => dispatch(logout()),
        getProfileData: (id) => dispatch({type: GET_PROFILE_DATA, payload: id}),
    }
}

const mapStateToProps = (state) => {
    return {
        log: state.log,
        profileData: state.log.userProfileData
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);