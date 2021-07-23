import { createStore, compose, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import {
  seamlessImmutableReconciler,
  seamlessImmutableTransformCreator,
} from "redux-persist-seamless-immutable";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./ducks";
import rootSaga from "./sagas";

const transformerConfig = {
  whitelistPerReducer: {
    auth: ["token", "signed"],
  },
  blacklistPerReducer: {
    auth: ["loading"],
  },
};

const persistConfig = {
  key: "boilerplate", // trocar de acordo com projeto
  storage,
  stateReconciler: seamlessImmutableReconciler,
  transforms: [seamlessImmutableTransformCreator(transformerConfig)],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const composer = compose(applyMiddleware(...middlewares));

const store = createStore(persistedReducer, composer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
