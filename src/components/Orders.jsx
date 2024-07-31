import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteOrder, fetchOrders } from "../redux/reducers/ordersReducer";
import "./Orders.css";
import OrderDetails from "./OrderDetails";
import { useState } from "react";
import PopupOrder from "./PopupOrder";
import trashIcon from "../assets/icons/trash.svg";
import menuIcon from "../assets/icons/menu.svg";

const Orders = () => {
  const dispatch = useDispatch();
  const ordersState = useSelector((state) => state.orders);
  const { orders, loading, error } = ordersState;
  const [selectOrder, setSelectOrder] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  console.log("order1", orders);
  console.log("order", selectedOrder);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleDetailsClick = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseDetails = () => {
    setSelectedOrder(null);
  };

  const handleDelete = (orderId) => {
    dispatch(deleteOrder(orderId));
    setShowPopup(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month =
      date
        .toLocaleString("default", { month: "short" })
        .charAt(0)
        .toUpperCase() +
      date.toLocaleString("default", { month: "short" }).slice(1);
    const year = date.getFullYear();
    return `${day} / ${month} / ${year}`;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="orders-container">
      <h2 className="orders-title">Приходы / {orders.length}</h2>
      <div className="orders-wrapper">
        <div className={`order-list ${selectedOrder ? "shrink" : ""}`}>
          {orders.map((order) => {
            const totalProducts = order.products.length;
            const totalUsd = order.products.reduce(
              (sum, product) =>
                sum + product.price.find((p) => p.symbol === "USD").value,
              0,
            );
            const totalUah = order.products.reduce(
              (sum, product) =>
                sum + product.price.find((p) => p.symbol === "UAH").value,
              0,
            );

            const formattedDate = formatDate(order.date);

            return (
              <>
                {!selectedOrder ? (
                  <div key={order.id} className="order-item">
                    <div>{order.title}</div>
                    <button
                      className="menu-button"
                      onClick={() => handleDetailsClick(order)}
                    >
                      <svg className="menu-icon">
                        <use href={`${menuIcon}#menu`} />
                      </svg>
                    </button>
                    <div className="order-meta">
                      <span className="order-meta__total-products">
                        {totalProducts}
                      </span>
                      <p className="order-meta__label secondary-color">
                        Orders
                      </p>
                    </div>
                    <div className="order-meta">
                      <span>{formattedDate}</span>
                    </div>
                    <div className="order-totals">
                      <p className="product-price--first secondary-color">
                        {" "}
                        {totalUsd} ${" "}
                      </p>
                      <p className="product-price--second"> {totalUah} UAH</p>
                    </div>
                    <button
                      className="delete-button"
                      onClick={() => {
                        setSelectOrder(order);
                        setShowPopup(true);
                      }}
                    >
                      <svg className="trash-icon">
                        <use href={`${trashIcon}#trash`} />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <div key={order.id} className="order-item open">
                    <div className="order-meta">
                      <span className="order-meta__total-products">
                        {totalProducts}
                      </span>
                      <p className="order-meta__label secondary-color">
                        Продукта
                      </p>
                    </div>
                    <div className="order-meta">
                      <span>{formattedDate}</span>
                    </div>
                    <button className="menu-button">
                      <svg className="menu-icon">
                        <use href={`${menuIcon}#menu`} />
                      </svg>
                    </button>
                  </div>
                )}
              </>
            );
          })}
        </div>
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
          onConfirm={() => handleDelete(selectedOrder.id)}
          onCancel={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default Orders;
