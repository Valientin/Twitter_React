// import { call, put, takeEvery } from 'redux-saga/effects';
// import { fetchArticlesApi } from './api';



// function* fetchArticles(action) {
//    try {
//       const article = yield call(fetchArticlesApi, action.payload);
//       yield put({type: GET_PROFILE_DATA_SUCCEEDED, payload: article});
//    } catch (e) {
//       yield put({type: GET_PROFILE_DATA_FAILED, payload: e.message});
//    }
// }


// export const items = [
//     takeEvery(GET_PROFILE_DATA, fetchArticles)
// ];