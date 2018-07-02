// import { call, put, takeEvery } from 'redux-saga/effects';
// import { fetchArticlesApi } from './api';



// function* fetchArticles(action) {
//    try {
//       const article = yield call(fetchArticlesApi, action.payload);
//       yield put({type: ARTICLE_FETCH_SUCCEEDED, payload: article});
//    } catch (e) {
//       yield put({type: ARTICLE_FETCH_FAILED, payload: e.message});
//    }
// }


export const items = [
    // takeEvery(ARTICLE_FETCH_REQUEST, fetchArticles)
];