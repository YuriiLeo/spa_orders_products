import PropTypes from "prop-types";
import trashIcon from "../../assets/icons/trash.svg";
import menuIcon from "../../assets/icons/menu.svg";
import { formatDateWithMonthName } from "../../services/utils/dateUtils";

const OrderItem = ({ order, onDetailsClick, onDeleteClick, selected }) => {
  const totalProducts = order.products.length;
  const totalUsd = order.products.reduce(
    (sum, product) => sum + product.price.find((p) => p.symbol === "USD").value,
    0,
  );
  const totalUah = order.products.reduce(
    (sum, product) => sum + product.price.find((p) => p.symbol === "UAH").value,
    0,
  );
  const formattedDate = formatDateWithMonthName(order.date);

  return (
    <>
      {!selected ? (
        <li key={order.id} className="order-item">
          <div>{order.title}</div>
          <button className="menu-button" onClick={() => onDetailsClick(order)}>
            <svg className="menu-icon">
              <use href={`${menuIcon}#menu`} />
            </svg>
          </button>
          <div className="order-meta">
            <span className="order-meta__total-products">{totalProducts}</span>
            <p className="order-meta__label secondary-color">Orders</p>
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
              onDeleteClick(order);
            }}
          >
            <svg className="trash-icon">
              <use href={`${trashIcon}#trash`} />
            </svg>
          </button>
        </li>
      ) : (
        <li key={order.id} className="order-item open">
          <div className="order-meta">
            <span className="order-meta__total-products">{totalProducts}</span>
            <p className="order-meta__label secondary-color">Products</p>
          </div>
          <div className="order-meta">
            <span>{formattedDate}</span>
          </div>
          <button className="menu-button" onClick={() => onDetailsClick(order)}>
            <svg className="menu-icon">
              <use href={`${menuIcon}#menu`} />
            </svg>
          </button>
        </li>
      )}
    </>
  );
};

OrderItem.propTypes = {
  order: PropTypes.object.isRequired,
  onDetailsClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

export default OrderItem;
