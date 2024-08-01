import { useState } from "react";
import PropTypes from "prop-types";
import trashIcon from "../../assets/icons/trash.svg";
import PopupProduct from "../Popup/PopupProduct";
import ButtonClose from "../ButtonClose";

const OrderDetails = ({ order, onClose }) => {
  const [productToDelete, setProductToDelete] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleDeleteClick = (product) => {
    setProductToDelete(product);
    setShowPopup(true);
  };

  const handleConfirmDelete = () => {
    // onDeleteProduct(productToDelete.id);
    setShowPopup(false);
  };

  const handleCancelDelete = () => {
    setShowPopup(false);
    setProductToDelete(null);
  };

  return (
    <div className="order-details">
      <div className="order-details-header">
        <div className="title">{order.title}</div>
        <div className="product-add-container third-color">
          <button className="button-add">+</button>
          <span> Add product</span>
        </div>
        <ButtonClose onClose={onClose} />
      </div>
      <ul className="products-list">
        {order.products.map((product) => (
          <li key={product.id} className="order-details-item">
            <span className="product-status"></span>
            <img
              src={product.photo}
              alt={product.title}
              className="product-photo"
            />
            <div className="product-info">
              <p>{product.title}</p>
              <p className="secondary-color">SN-{product.serialNumber}</p>
            </div>
            <p className="third-color">{product.specification}</p>
            <button
              className="delete-button"
              onClick={() => handleDeleteClick(product)}
            >
              <svg className="trash-icon">
                <use href={`${trashIcon}#trash`} />
              </svg>
            </button>
          </li>
        ))}
      </ul>
      {showPopup && (
        <PopupProduct
          message={`Are you sure you want to delete this product ${productToDelete.title}?`}
          product={productToDelete}
          onConfirm={handleConfirmDelete}
          onClose={handleCancelDelete}
        />
      )}
    </div>
  );
};

OrderDetails.propTypes = {
  order: PropTypes.shape({
    title: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        photo: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        serialNumber: PropTypes.number.isRequired,
        specification: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default OrderDetails;
