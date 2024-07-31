import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/reducers/productsReducer";
import "./Products.css";
import PopupProduct from "./PopupProduct";
import trashIcon from "../assets/icons/trash.svg";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [filterType, setFilterType] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const filteredProducts = filterType
    ? products.filter((product) => product.type === filterType)
    : products;

  const handleDeleteClick = (product) => {
    setProductToDelete(product);
    setShowPopup(true);
  };

  const handleConfirmDelete = () => {
    console.log("Deleting product:", productToDelete);
    setShowPopup(false);
    setProductToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowPopup(false);
    setProductToDelete(null);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day} / ${month} / ${year}`;
  };

  return (
    <div className="products-container">
      <div className="products-header">
        <h1>Products / {filteredProducts.length}</h1>
        <div className="products-filters">
          <label className="filters-title" htmlFor="type-filter">
            Type:
          </label>
          <select
            id="type-filter"
            value={filterType}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="Monitors">Monitors</option>
            <option value="Tablet">Tablet</option>
          </select>
        </div>
      </div>
      <ul>
        {filteredProducts.map((product) => {
          const usdPrice = product.price.find((p) => p.symbol === "USD");
          const uahPrice = product.price.find((p) => p.symbol === "UAH");

          // const formatDate = (dateString) => {
          //   const date = new Date(dateString);
          //   const day = String(date.getDate()).padStart(2, '0');
          //   const month = String(date.getMonth() + 1).padStart(2, '0');
          //   const year = date.getFullYear();
          //   return `${day} / ${month} / ${year}`;
          // };

          const formattedStartDate = formatDate(product.guarantee.start);
          const formattedEndDate = formatDate(product.guarantee.end);
          const formattedDate = formatDate(product.date);
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
                <p> from {formattedStartDate}</p>
                <p> to {formattedEndDate}</p>
              </div>
              <p>{product.isNew ? "новый" : "Б / У"}</p>
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
                onClick={() => handleDeleteClick(product)}
              >
                <svg className="trash-icon">
                  <use href={`${trashIcon}#trash`} />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
      {showPopup && (
        <PopupProduct
          message={`Are you sure you want to delete this product ${productToDelete.title}?`}
          product={productToDelete}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default Products;
