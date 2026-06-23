import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/products";
import banner from "../assets/banner.jpg";

const categories = [
  { label: "All", value: "all" },
  { label: "Wedding Rings", value: "wedding-rings" },
  { label: "Engagement Rings", value: "engagement-rings" },
  { label: "Signet Rings", value: "signet-rings" },
  { label: "Earrings", value: "earrings" },
  { label: "Necklaces", value: "necklaces" },
];

export default function Home() {
  const products = getProducts();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="page">
      <div className="shop-banner">
        <img src={banner} alt="Noa Fine Jewelry banner" />
      </div>

      <div className="home-hero">
        <h1 className="home-title">Welcome to Noa Fine Jewery </h1>
        <p className="home-subtitle">Discover unique handmade gold jewelry</p>
      </div>

      <div className="container">
        <h2 className="page-title">Jewelry Collection</h2>

        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category.value}
              className={
                selectedCategory === category.value
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}