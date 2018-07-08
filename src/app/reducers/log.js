import { 
  LOGIN_USER, REGISTER_USER, LOGOUT,
  GET_PROFILE_DATA_SUCCEEDED, GET_PROFILE_DATA_FAILED,
  CHANGE_PROFILE_DATA
} from '../actions/actionTypes';

const initialState = {
  loginError: false,
  registerError: false,
  userProfileData: {},
  message: ''
}

export function log(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_DATA_SUCCEEDED:
      return {...state, userProfileData: action.payload};
    case GET_PROFILE_DATA_FAILED:
      return {...state, message: action.payload}
    case CHANGE_PROFILE_DATA: 
      return {...state, userProfileData: Object.assign(state.userProfileData, action.payload)}
    case LOGIN_USER:
      return {...state, loginError: action.payload};
    case REGISTER_USER:
      return {...state, registerError: action.payload};
    case LOGOUT:
      return {...state, logoutError: action.payload}
    default:
      return state;
  }
}