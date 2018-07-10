import { combineReducers } from 'redux';
import { log } from './log';
import { profile } from './profile';
import { user } from './user';

export default combineReducers({
    log,
    profile,
    user
});