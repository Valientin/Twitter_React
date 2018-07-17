import { connect } from 'react-redux';
import Followers from '../components/Followers';


const mapStateToProps = (state) => {
    return {
        followersData: state.log.userProfileData.followers
	}
};

export default connect(mapStateToProps)(Followers);