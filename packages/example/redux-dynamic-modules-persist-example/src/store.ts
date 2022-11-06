import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers, createStore as createReduxStore } from "redux";
import { createStore as createEggsStore } from "redux-dynamic-modules";

