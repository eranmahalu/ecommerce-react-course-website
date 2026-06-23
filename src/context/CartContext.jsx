import { createContext, useState, useContext } from "react";
import { getProductById } from "../data/products";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(productToAdd) {
    const existing = cartItems.find(
      (item) =>
        item.id === productToAdd.id &&
        item.goldColor === productToAdd.goldColor &&
        item.size === productToAdd.size
    );

    if (existing) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === productToAdd.id &&
        item.goldColor === productToAdd.goldColor &&
        item.size === productToAdd.size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCartItems(updatedCartItems);
    } else {
      setCartItems([
        ...cartItems,
        {
          id: productToAdd.id,
          goldColor: productToAdd.goldColor,
          size: productToAdd.size,
          quantity: 1,
        },
      ]);
    }
  }

  function getCartItemsWithProducts() {
    return cartItems
      .map((item) => ({
        ...item,
        product: getProductById(item.id),
      }))
      .filter((item) => item.product);
  }

  function removeFromCart(productId, goldColor, size) {
    setCartItems(
      cartItems.filter(
        (item) =>
          !(
            item.id === productId &&
            item.goldColor === goldColor &&
            item.size === size
          )
      )
    );
  }

  function updateQuantity(productId, goldColor, size, quantity) {
    if (quantity <= 0) {
      removeFromCart(productId, goldColor, size);
      return;
    }

    setCartItems(
      cartItems.map((item) =>
        item.id === productId &&
        item.goldColor === goldColor &&
        item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  }

  function getCartTotal() {
    const total = cartItems.reduce((total, item) => {
      const product = getProductById(item.id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);

    return total;
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        getCartItemsWithProducts,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}