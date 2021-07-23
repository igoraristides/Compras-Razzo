import { combineReducers } from 'redux';

import auth from './auth';
import bag from './bag';
import user from './user';

const reducers = combineReducers({
  auth,
  user,
  bag,
});

export default reducers;
