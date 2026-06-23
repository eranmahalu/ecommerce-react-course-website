import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        className="product-card-image"
        src={product.image}
        alt={product.name}
      />

      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>

        <div className="product-card-actions">
          <Link className="btn btn-secondary" to={`/product/${product.id}`}>
            View details
          </Link>

          <Link className="btn btn-primary" to={`/product/${product.id}`}>
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}