import { ADD_TWEET} from '../actions/actionTypes';
  
  const initialState = {
    addTweetError: false,
    message: ''
  }
  
  export function profile(state = initialState, action) {
    
    switch (action.type) {
      case ADD_TWEET:
        return {...state, addTweetError: action.payload};
      default:
        return state;
    }
  }