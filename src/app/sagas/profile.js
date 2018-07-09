import { call, put, takeEvery } from 'redux-saga/effects';
import { getProfileDataApi,getTweetsProfileApi } from './api';
import { GET_PROFILE_DATA, GET_PROFILE_DATA_SUCCEEDED, GET_PROFILE_DATA_FAILED, GET_TWEETS_PROFILE, GET_TWEETS_PROFILE_SUCCEEDED, GET_TWEETS_PROFILE_FAILED } from '../actions/actionTypes';


function* getProfileData(action) {
    try {
        const article = yield call(getProfileDataApi, action.payload);
        yield put({type: GET_PROFILE_DATA_SUCCEEDED, payload: article});
    } catch (e) {
        yield put({type: GET_PROFILE_DATA_FAILED, payload: e.message});
    }
}
function* getTweetsProfile(action) {
    try {
        const article = yield call(getTweetsProfileApi, action.payload);
        yield put({type: GET_TWEETS_PROFILE_SUCCEEDED, payload: article});
    } catch (e) {
        yield put({type: GET_TWEETS_PROFILE_FAILED, payload: e.message});
    }
}


export const profile = [
    takeEvery(GET_PROFILE_DATA, getProfileData),
    takeEvery(GET_TWEETS_PROFILE, getTweetsProfile)
];