import { call, put, takeEvery, select, takeLatest } from 'redux-saga/effects';
import { getNewsByParams, getNewsByKeyword } from '../api';

// saga for fetching main news
export function* fetchMainNews() {
  yield put({ type: 'SET_LOADING', payload: true});
  try {
    const mainState = state => state.main;
    const { country, category } = yield select(mainState);
    const data = yield call(getNewsByParams, country, category);
    yield put({ type: 'MAIN_NEWS_SUCCESS', payload: data });
    yield put({ type: 'SET_LOADING', payload: false});
  } catch (e) {
    yield put({ type: 'MAIN_NEWS_ERROR', payload: e });
  }
}

// saga for fetching search news
function* fetchSearchNews(action) {
  yield put({ type: 'SET_LOADING', payload: true});
  try {
    const data = yield call(getNewsByKeyword, action.payload);
    yield put({ type: 'RESET_DATA' });
    yield put({ type: 'MAIN_NEWS_SUCCESS', payload: data });
    yield put({ type: 'SET_LOADING', payload: false});
  } catch (e) {
    yield put({ type: 'MAIN_NEWS_ERROR', payload: e });
  }
}

export default function* rootSaga() {
  yield takeEvery('CHOOSE_CATEGORY', fetchMainNews);
  yield takeEvery('CHOOSE_COUNTRY', fetchMainNews);
  yield takeEvery('RESTORE_CATEGORY', fetchMainNews);
  yield takeEvery('RESTORE_COUNTRY', fetchMainNews);
  yield takeLatest('MAIN_NEWS_REQUEST', fetchMainNews);
  yield takeEvery('SET_KEYWORD', fetchSearchNews);
}