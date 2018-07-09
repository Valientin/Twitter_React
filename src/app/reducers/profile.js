import { ADD_TWEET, ADD_TWEET_TO_STATE, GET_TWEETS_PROFILE_SUCCEEDED, GET_TWEETS_PROFILE_FAILED } from '../actions/actionTypes';
  
  const initialState = {
    addTweetError: false,
    message: '',
    tweets: {}
  }
  
  export function profile(state = initialState, action) {
    
    switch (action.type) {
      case ADD_TWEET:
        return {...state, addTweetError: action.payload};
      case ADD_TWEET_TO_STATE:
        console.log(action.payload)
        return {...state, tweets: Object.assign({},state.tweets, action.payload)};
      case GET_TWEETS_PROFILE_SUCCEEDED:
         console.log(action.payload)
        return {...state, tweets: action.payload};
      case GET_TWEETS_PROFILE_FAILED:
        return {...state, message: action.payload}
      default:
        return state;
    }
  }