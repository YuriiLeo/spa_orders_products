import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  orders: [],
  error: "",
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    fetchOrdersRequest: (state) => {
      state.loading = true;
    },
    fetchOrdersSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
      state.error = "";
    },
    fetchOrdersFailure: (state, action) => {
      state.loading = false;
      state.orders = [];
      state.error = action.payload;
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload,
      );
    },
  },
});

export const {
  fetchOrdersRequest,
  fetchOrdersSuccess,
  fetchOrdersFailure,
  deleteOrder,
} = ordersSlice.actions;

export const fetchOrders = () => async (dispatch) => {
  dispatch(fetchOrdersRequest());
  try {
    const response = await axios.get("http://localhost:4000/orders");
    dispatch(fetchOrdersSuccess(response.data));
  } catch (error) {
    dispatch(fetchOrdersFailure(error.message));
  }
};

export const removeOrder = (orderId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:4000/orders/${orderId}`);
    dispatch(deleteOrder(orderId));
  } catch (error) {
    console.error("Failed to delete the order:", error);
  }
};

export default ordersSlice.reducer;
