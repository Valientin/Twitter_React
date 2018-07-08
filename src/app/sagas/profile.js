import { call, put, takeEvery } from 'redux-saga/effects';
import { getProfileDataApi } from './api';
import { GET_PROFILE_DATA, GET_PROFILE_DATA_SUCCEEDED, GET_PROFILE_DATA_FAILED } from '../actions/actionTypes';


function* getProfileData(action) {
    try {
        const article = yield call(getProfileDataApi, action.payload);
        yield put({type: GET_PROFILE_DATA_SUCCEEDED, payload: article});
    } catch (e) {
        yield put({type: GET_PROFILE_DATA_FAILED, payload: e.message});
    }
}


export const profile = [
    takeEvery(GET_PROFILE_DATA, getProfileData)
];