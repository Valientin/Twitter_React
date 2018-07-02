import { all } from 'redux-saga/effects';
import { items } from './items';

export default function* rootSaga() {
  yield all([
    ...items
  ])
}