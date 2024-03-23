import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./Cake/cakeReducer";
import logger from "redux-logger";

const store = configureStore({
     reducer: cakeReducer,
     // middleware:(getMiddleware)=>getMiddleware().concat(logger)
})

export default store