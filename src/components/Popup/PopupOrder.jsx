import PropTypes from "prop-types";
import trashIcon from "../../assets/icons/trash.svg";
import "./Popup.css";

const PopupOrder = ({ message, order, onConfirm, onCancel }) => {
  if (!order) return null;
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onCancel}>
          &times;
        </button>
        <div className="popup-meta">
          <p className="popup-message">{message}</p>
          <span className="product-status"></span>
          <div className="popup-order">
            <div className="popup-order-info">
              <span className="product-status"></span>
              <p>{order.title}</p>
              <p className="secondary-color">Order ID: {order.id}</p>
            </div>
          </div>
        </div>
        <div className="popup-buttons">
          <button className="popup-cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="popup-delete" onClick={onConfirm}>
            <svg className="trash-icon__popup">
              <use href={`${trashIcon}#trash`} />
            </svg>
            <p>Delete</p>
          </button>
        </div>
      </div>
    </div>
  );
};

PopupOrder.propTypes = {
  message: PropTypes.string.isRequired,
  order: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default PopupOrder;
