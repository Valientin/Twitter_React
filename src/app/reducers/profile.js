import { ADD_TWEET, ADD_TWEET_TO_STATE,
  GET_TWEETS_PROFILE_FAILED, CLEAR_TWEETS_STATE, GET_TWEETS_PROFILE_SUCCEEDED,
  GET_PROFILE_DATA_TWEETS_SUCCEEDED, GET_PROFILE_DATA_TWEETS_FAILED, ADD_TWEET_COMMENT
} from '../actions/actionTypes';
  
  const initialState = {
    addTweetError: false,
    message: '',
    tweets: {},
    userProfileData: {}
  }
  
  export function profile(state = initialState, action) {
    
    switch (action.type) {
      case ADD_TWEET:
        return {...state, addTweetError: action.payload};
      case ADD_TWEET_TO_STATE:
        return {...state, tweets: Object.assign({},state.tweets, action.payload)};
      case ADD_TWEET_COMMENT:
        const newTweets = {...state.tweets};
        const comments = newTweets[action.payload.idTweet].comments ? newTweets[action.payload.idTweet].comments : newTweets[action.payload.idTweet].comments = {};
        comments[action.payload.idComment] = {...action.payload.data};
        console.log(newTweets)
        return {...state, tweets: newTweets}
      case GET_TWEETS_PROFILE_SUCCEEDED:
        return {...state, tweets: action.payload};
      case GET_TWEETS_PROFILE_FAILED:
        return {...state, message: action.payload}
      case GET_PROFILE_DATA_TWEETS_SUCCEEDED:
        return {...state, userProfileData: action.payload};
      case GET_PROFILE_DATA_TWEETS_FAILED:
        return {...state, message: action.payload}
      case CLEAR_TWEETS_STATE:
        return {...state, tweets: action.payload}
      default:
        return state;
    }
  }