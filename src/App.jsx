import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;