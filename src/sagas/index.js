import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_QUOTE_AUTHOR, SET_QUOTE, SET_AUTHOR } from '../constants';
import { fetchQuoteAuthor } from '../apis/quoteAuthor';

function* fetchQuoteAuthorSaga() {
  try {
    const quoteRes = yield call(fetchQuoteAuthor);
    const { quote, author } = quoteRes;
    yield put({ type: SET_QUOTE, quote });
    yield put({ type: SET_AUTHOR, author });
  } catch (err) {
    console.error(err);
  }

}

export function* watcherSaga() {
  yield takeEvery(FETCH_QUOTE_AUTHOR, fetchQuoteAuthorSaga);
}
