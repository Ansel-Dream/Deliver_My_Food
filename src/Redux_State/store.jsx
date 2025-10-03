import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/slice";
import contactReducer from "./Contact/slice";
import dataSlice from "./Contact/dataSlice";

//import reportReducer from "./Report/reportSlice";

const store = configureStore({
  reducer: {
    Auth: authReducer,
    contact: contactReducer,
    data: dataSlice,
  },
});

export default store;
