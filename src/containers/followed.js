import { connect } from 'react-redux';
import Followed from '../components/Followed';


const mapStateToProps = (state) => {
    console.log(state)
    return {
        followedData: state.log.userProfileData.followed
	}
};

export default connect(mapStateToProps)(Followed);