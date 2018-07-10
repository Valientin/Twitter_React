import { 
    GET_USER_DATA_SUCCEEDED, GET_USER_DATA_FAILED,
    FOLLOWED_ON_USER, UNFOLLOWED_ON_USER
} from '../actions/actionTypes';
  
const initialState = {
    getUserData: true,
    userData: {},
    setFollowed: null,
    setUnFollowed: null
}

export function user(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DATA_SUCCEEDED:
            return {...state, userData: action.payload};
        case GET_USER_DATA_FAILED:
            return {...state, getUserData: false}
        case FOLLOWED_ON_USER:
            console.log(action.payload)
            return {...state, setFollowed: action.payload}
        case UNFOLLOWED_ON_USER:
            console.log(action.payload)
            return {...state, setUnFollowed: action.payload}
        default:
            return state;
    }
}