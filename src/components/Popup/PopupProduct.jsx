import PropTypes from "prop-types";
import "./Popup.css";
import trashIcon from "../../assets/icons/trash.svg";
import ButtonClose from "../ButtonClose";

const PopupProduct = ({ message, product, onConfirm, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <ButtonClose onClose={onClose}/>

        <div className="popup-meta">
          <p className="popup-message">{message}</p>
          <div className="popup-product">
            <span className="product-status"></span>
            <img
              src={product.photo}
              alt={product.title}
              className="popup-product-photo"
            />
            <div className="popup-product-info">
              <p>{product.title}</p>
              <p className="secondary-color">SN-{product.serialNumber}</p>
            </div>
          </div>
        </div>
        <div className="popup-buttons">
          <button className="popup-cancel" onClick={onClose}>
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

PopupProduct.propTypes = {
  message: PropTypes.string.isRequired,
  product: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    serialNumber: PropTypes.number.isRequired,
  }).isRequired,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PopupProduct;
