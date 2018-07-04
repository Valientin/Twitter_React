import { connect } from 'react-redux';
import Profile from '../components/Profile';
import { GET_PROFILE_DATA } from '../app/actions/actionTypes';

function mapDispatchToProps(dispatch){
    return {
        getProfileData: (id) => dispatch({type: GET_PROFILE_DATA, payload: id}),
    }
}

const mapStateToProps = (state) => {
    return {
        profileData: state.log.userProfileData
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);