import PropTypes from "prop-types";
import OrderItem from "./OrderItem";

const OrderList = ({
  orders,
  onDetailsClick,
  onDeleteClick,
  selectedOrder,
}) => {
  return (
    <ul className={`order-list ${selectedOrder ? "shrink" : ""}`}>
      {orders.map((order) => (
        <OrderItem
          key={order.id}
          order={order}
          onDetailsClick={onDetailsClick}
          onDeleteClick={onDeleteClick}
          selected={selectedOrder}
        />
      ))}
    </ul>
  );
};

OrderList.propTypes = {
  orders: PropTypes.array.isRequired,
  onDetailsClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  selectedOrder: PropTypes.object,
};

export default OrderList;
