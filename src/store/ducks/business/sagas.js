import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { signOutRequest } from '../auth/actions';
import { businessSuccess } from './actions';

export function* getBusiness() {
  try {
    const { data } = yield call(api.get, 'me/business');

    if (data.length > 0) {
      yield put(businessSuccess(data));
    } else {
      yield put(signOutRequest());
    }
  } catch (e) {
    yield put(signOutRequest());
  }
}

export function setToken({ payload }) {
  if (!payload || !payload.auth) return;

  const { token } = payload.auth;

  if (token) api.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@business/BUSINESS_REQUEST', getBusiness),
]);
