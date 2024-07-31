import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "./reducers/ordersReducer";
import productsReducer from "./reducers/productsReducer";

const store = configureStore({
  reducer: {
    orders: ordersReducer,
    products: productsReducer,
  },
});

export default store;
