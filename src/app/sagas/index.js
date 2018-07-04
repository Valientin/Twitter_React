import { all } from 'redux-saga/effects';
import { profile } from './profile';

export default function* rootSaga() {
  yield all([
    ...profile
  ])
}