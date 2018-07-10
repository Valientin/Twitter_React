import { connect } from 'react-redux';
import Header from '../components/Header';
import { GET_PROFILE_DATA } from '../app/actions/actionTypes';
import { logout }  from '../app/actions/log';
import { addTweet, addTweetState }  from '../app/actions/profile';


function mapDispatchToProps(dispatch){
    return {
        logout: () => dispatch(logout()),
        addTweet: (id,data) => dispatch(addTweet(id,data)),
        addTweetState: (id,data) => dispatch(addTweetState(id,data)),
        getProfileData: (id) => dispatch({type: GET_PROFILE_DATA, payload: id}),
    }
}

const mapStateToProps = (state) => {
    return {
        log: state.log,
        profileData: state.log.userProfileData, 
        profile: state.profile
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);