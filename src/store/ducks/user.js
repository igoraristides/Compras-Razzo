import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Actions Creators */
export const { Types, Creators } = createActions({
  setUser: ['user'],
  getMeRequest: [''],
  getMeSuccess: ['user'],
  authSignOut: [],
});

/* Initial State */
const INITIAL_STATE = Immutable({});

/* Reducers */
const request = (state) =>
  state.merge({
    ...state,
  });

const setUser = (state, { user }) => state.merge({ ...state, ...user });
const authSignOut = (state) => INITIAL_STATE;

/* Reducers to types */
const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_USER]: setUser,
  [Types.GET_ME_REQUEST]: request,
  [Types.GET_ME_SUCCESS]: setUser,
  [Types.AUTH_SIGN_OUT]: authSignOut,
});

export default reducer;
