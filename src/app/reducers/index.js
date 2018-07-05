import { combineReducers } from 'redux';
import { log } from './log';
import { profile } from './profile';

export default combineReducers({
    log,
    profile
});