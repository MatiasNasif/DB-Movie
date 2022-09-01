import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import adminReducer from "./admin";
import favoritesReducer from "./favorites";
import userReducer from "./user";


const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
  reducer: {
    user: userReducer,
    favorites: favoritesReducer,
    admin: adminReducer
  },
});

export default store;
