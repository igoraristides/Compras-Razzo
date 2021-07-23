import { call, put } from "redux-saga/effects";

import useToast from "../../hooks/useToast";
import api from "../../services/api";
import { Creators as AuthActions } from "../ducks/auth";
import { Creators as UserActions } from "../ducks/user";

const toast = useToast();

export function* signIn({ email, password }) {
  try {
    const res = yield call(api.post, "user/login", {
      email,
      password,
    });
    const { token, user } = res.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(AuthActions.authSignInSuccess(token));

    yield put(UserActions.setUser(user));
  } catch (error) {
    yield put(AuthActions.authSignInFailure());

    if (error.response.data && error.response.data.error) {
      return toast.errorToast(error.response.data);
    }
    return toast.errorToast("Email e/ou senha estão incorretos");
  }
}

export function* getMe() {
  try {
    const { data } = yield call(api.get, "/user/me");

    yield put(UserActions.getMeSuccess(data));
  } catch (error) {
    yield put(AuthActions.authSignOut());
  }
}

export function* setToken({ payload }) {
  if (!payload || !payload.auth) return;

  const { token } = payload.auth;
  if (token) api.defaults.headers.Authorization = `Bearer ${token}`;

  if (token) {
    yield put(UserActions.getMeRequest());
  } else yield put(AuthActions.authSignOut());
}
