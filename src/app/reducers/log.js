import { LOGIN_USER, REGISTER_USER, LOGOUT } from '../actions/actionTypes';

const initialState = {
  loginError: false,
  registerError: false
}

export function log(state = initialState, action) {
  switch (action.type) {
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