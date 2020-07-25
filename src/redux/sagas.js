import { call, put, takeEvery } from 'redux-saga/effects';
import { getNewsByParams, getNewsByKeyword } from '../api';

// saga for fetching main news
function* fetchMainNews(action) {
  try {
    const data = yield call(getNewsByParams, action.payload);
    yield put({ type: 'GET_MAIN_NEWS', payload: data });
  } catch (e) {
    yield put({ type: 'MAIN_NEWS_ERROR', payload: e });
  }
}

// saga for fetching search news
function* fetchSearchNews(action) {
  try {
    const data = yield call(getNewsByKeyword, action.payload);
    yield put({ type: 'GET_SEARCH_NEWS', payload: data });
  } catch (e) {
    yield put({ type: 'SEARCH_NEWS_ERROR', payload: e });
  }
}

export default function* rootSaga() {
  yield takeEvery('CHOOSE_CATEGORY', fetchMainNews);
  yield takeEvery('CHOOSE_COUNTRY', fetchMainNews);
  yield takeEvery('SET_KEYWORD', fetchSearchNews);
}