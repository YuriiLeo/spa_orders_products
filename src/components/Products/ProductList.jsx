import PropTypes from "prop-types";
import { formatDateWithLeadingZeros } from "../../services/utils/dateUtils";
import trashIcon from "../../assets/icons/trash.svg";

const ProductList = ({ products, onDeleteClick }) => {
  return (
    <ul>
      {products.map((product) => {
        const usdPrice = product.price.find((p) => p.symbol === "USD");
        const uahPrice = product.price.find((p) => p.symbol === "UAH");
        const formattedStartDate = formatDateWithLeadingZeros(
          product.guarantee.start,
        );
        const formattedEndDate = formatDateWithLeadingZeros(
          product.guarantee.end,
        );
        const formattedDate = formatDateWithLeadingZeros(product.date);

        return (
          <li key={product.id} className="product-item">
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
            <p>{product.specification}</p>
            <div>
              <p>from {formattedStartDate}</p>
              <p>to {formattedEndDate}</p>
            </div>
            <p>{product.isNew ? "new" : "used"}</p>
            <div>
              <p className="product-price--first secondary-color">
                {usdPrice.value} $
              </p>
              <p className="product-price--second">
                {uahPrice.value} {uahPrice.symbol}
              </p>
            </div>
            <p>{product.order}</p>
            <p>{formattedDate}</p>
            <button
              className="delete-button"
              onClick={() => onDeleteClick(product)}
            >
              <svg className="trash-icon">
                <use href={`${trashIcon}#trash`} />
              </svg>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      photo: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      serialNumber: PropTypes.number.isRequired,
      specification: PropTypes.string.isRequired,
      guarantee: PropTypes.shape({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }).isRequired,
      isNew: PropTypes.bool.isRequired,
      price: PropTypes.arrayOf(
        PropTypes.shape({
          symbol: PropTypes.string.isRequired,
          value: PropTypes.number.isRequired,
        }),
      ).isRequired,
      order: PropTypes.number,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ProductList;
