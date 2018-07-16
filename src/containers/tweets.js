import { connect } from 'react-redux';
import Tweets from '../components/Tweets';
import { GET_TWEETS_PROFILE, GET_PROFILE_DATA_TWEETS  } from '../app/actions/actionTypes';
import { clearTweetsState, addTweetComment } from '../app/actions/profile';

function mapDispatchToProps(dispatch){
    return {
        getTweetsProfile: (id) => dispatch({type: GET_TWEETS_PROFILE, payload: id}),
        clearTweetsState: () => dispatch(clearTweetsState()),
        getProfileDataTweets: (id) => dispatch({type: GET_PROFILE_DATA_TWEETS, payload: id}),
        addTweetComment: (idUser, idTweet, data) => dispatch(addTweetComment(idUser, idTweet, data))
    }
}

const mapStateToProps = (state) => {
    return {
        tweetsProfile: state.profile.tweets,
        profileData: state.profile.userProfileData
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);