import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import quoteReducer from '../app/reducers/quotesReducer'

import { user } from "./user-reducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const reducers = combineReducers({
  user: user.reducer,
  quote : quoteReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

console.log(persistedReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);
