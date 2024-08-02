import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/reducers/productsReducer";
import "./Products.css";
import PopupProduct from "../components/Popup/PopupProduct";
import ProductList from "../components/Products/ProductList";

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

  products;

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
      <ProductList
        products={filteredProducts}
        onDeleteClick={handleDeleteClick}
      />
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

export default Products;
