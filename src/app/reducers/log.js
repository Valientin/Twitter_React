import { LOGIN_USER, REGISTER_USER } from '../actions/actionTypes';

const initialState = {
  loginError: false,
  registerError: false
}

export function log(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {...state, loginError: action.payload};
    default:
      return state;
  }
}