import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Actions Creators */
export const { Types, Creators } = createActions({
  authSignInRequest: ['email', 'password'],
  authSignInSuccess: ['token'],
  authSignInFailure: [],
  authSignOut: [],
});

/* Initial State */
const INITIAL_STATE = Immutable({
  token: null,
  signed: false,
  loading: false,
  user: null,
});

/* Reducers */
const authSignInRequest = (state) => state.merge({ loading: true });

const authSignInSuccess = (state, { token, user }) =>
  state.merge({
    signed: true,
    loading: false,
    user,
    token,
  });

const authSignInFailure = (state) =>
  state.merge({ loading: false, signed: false });

const authSignOut = (state) =>
  state.merge({ token: null, signed: false, user: null });

/* Reducers to types */
const reducer = createReducer(INITIAL_STATE, {
  [Types.AUTH_SIGN_IN_REQUEST]: authSignInRequest,
  [Types.AUTH_SIGN_IN_SUCCESS]: authSignInSuccess,
  [Types.AUTH_SIGN_IN_FAILURE]: authSignInFailure,
  [Types.AUTH_SIGN_OUT]: authSignOut,
});

export default reducer;
