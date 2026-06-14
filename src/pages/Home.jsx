import ProdactCard from "../components/ProdactCard";
import { getProducts } from "../data/products";
import { Link } from "react-router-dom";

export default function Home() {
    const products = getProducts();
    return (
        <div className="page">
            <div className="home-hero">
                <h1 className="home-title">Welcome to NoaFineJewery shop</h1>
                <p className="home-subtitle">Discover unique handmade gold jewelry</p>
            </div>
            <div className="container">
                <h2 className="page-title">Gold wedding rings</h2>
                <div className="product-grid">
                    {products.map((product) => (
                       <ProdactCard product={product} key={product.id}/>
                    ))}
                </div>

            </div>
        </div>
    );
}