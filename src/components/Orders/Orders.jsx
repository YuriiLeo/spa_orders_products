import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteOrder, fetchOrders } from "../../redux/reducers/ordersReducer";
import "./Orders.css";
import OrderDetails from "./OrderDetails";
import { useState } from "react";
import PopupOrder from "../Popup/PopupOrder";
import OrderList from "./OrderList";

const Orders = () => {
  const dispatch = useDispatch();
  const ordersState = useSelector((state) => state.orders);
  const { orders, loading, error } = ordersState;
  const [selectOrder, setSelectOrder] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleDetailsClick = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseDetails = () => {
    setSelectedOrder(null);
  };

  const handleDeleteClick = (order) => {
    // setSelectedOrder(order)
    setSelectOrder(order);
    setShowPopup(order);
  };

  const handleDelete = (orderId) => {
    dispatch(deleteOrder(orderId));
    setShowPopup(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="orders-container">
      <h2 className="orders-title">Orders / {orders.length}</h2>
      <div className="orders-wrapper">
        <OrderList
          orders={orders}
          onDetailsClick={handleDetailsClick}
          onDeleteClick={handleDeleteClick}
          selectedOrder={selectedOrder}
          selectOrder={selectOrder}
        />
        {selectedOrder && (
          <div className="order-details-container">
            <OrderDetails order={selectedOrder} onClose={handleCloseDetails} />
          </div>
        )}
      </div>
      {showPopup && selectOrder && (
        <PopupOrder
          message={`Are you sure you want to delete this order?`}
          order={selectOrder}
          orderDate={selectedOrder}
          onConfirm={() => handleDelete(selectedOrder.id)}
          onCancel={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default Orders;
