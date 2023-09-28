import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  recipeReducer  from "./reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootPersisitConfig = {
  key: "root",
  storage,
};
export const rootReducer = combineReducers({
  recipe: recipeReducer,
});

export const persistedReducer = persistReducer(rootPersisitConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export default store;

console.log(store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("State after dispatch: ", store.getState())
);