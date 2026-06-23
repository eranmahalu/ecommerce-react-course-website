import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import { useCart } from "../context/CartContext";

const goldColors = ["Yellow Gold", "White Gold", "Rose Gold"];

const ringSizes = [4, 4.25, 4.5, 4.75, 5, 5.25, 5.5, 5.75, 6, 6.25, 6.5, 6.75, 7, 7.25, 7.5, 7.75,  8, 8.25, 8.5, 8.75, 9, 9.25,  9.5, 9.75, 10];

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedGoldColor, setSelectedGoldColor] = useState("Yellow Gold");
  const [selectedSize, setSelectedSize] = useState("");

  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const foundProduct = getProductById(id);

    if (!foundProduct) {
      navigate("/");
      return;
    }

    setProduct(foundProduct);
  }, [id, navigate]);

  function handleAddToCart() {
    if (product.requiresSize && !selectedSize) {
      alert("Please choose a ring size");
      return;
    }

    addToCart({
      ...product,
      goldColor: selectedGoldColor,
      size: product.requiresSize ? selectedSize : null,
    });

    navigate("/checkout");
  }

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-detail-content">
            <h1 className="product-detail-name">{product.name}</h1>
            <p className="product-detail-price">${product.price}</p>
            <p className="product-detail-description">{product.description}</p>

            <div className="product-options">
              <div className="product-option-group">
                <h3 className="product-option-title">14K Gold Color</h3>

                <div className="gold-color-options">
                  {goldColors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      className={
                        selectedGoldColor === color
                          ? "gold-color-btn active"
                          : "gold-color-btn"
                      }
                      onClick={() => setSelectedGoldColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {product.requiresSize && (
                <div className="product-option-group">
                  <label className="product-option-title" htmlFor="ring-size">
                    US Ring Size
                  </label>

                  <select
                    id="ring-size"
                    className="size-select"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    <option value="">Choose size</option>

                    {ringSizes.map((size) => (
                      <option key={size} value={size}>
                        US {size}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <button
              className="btn btn-primary btn-large"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}