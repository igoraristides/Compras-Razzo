import { all, takeLatest } from "redux-saga/effects";

import { Types as AuthTypes } from "../ducks/auth";
import { Types as UserTypes } from "../ducks/user";

import { setToken, signIn, getMe } from "./auth";

function* rootSaga() {
  return yield all([
    takeLatest("persist/REHYDRATE", setToken),
    takeLatest(AuthTypes.AUTH_SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.AUTH_SIGN_IN_SUCCESS, getMe),
    takeLatest(UserTypes.GET_ME_REQUEST, getMe),
  ]);
}

export default rootSaga;
