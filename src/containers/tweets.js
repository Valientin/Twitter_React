import { connect } from 'react-redux';
import Tweets from '../components/Tweets';
import { GET_PROFILE_DATA, GET_TWEETS_PROFILE  } from '../app/actions/actionTypes';
import { changeProfileData } from '../app/actions/log';

function mapDispatchToProps(dispatch){
    return {
        getTweetsProfile: (id) => dispatch({type: GET_TWEETS_PROFILE, payload: id}),
    }
}

const mapStateToProps = (state) => {
    return {
        tweetsProfile: state.profile.tweets
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);