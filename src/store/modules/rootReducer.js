import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {reducers as bagReducers} from './bag/reducer';

const reducers = combineReducers({
    bagReducers
});