import { Link, useLocation } from "react-router-dom";

export default function OrderConfirmation() {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return (
      <div className="page">
        <div className="container">
          <div className="order-success">
            <h1 className="order-success-title">No order found</h1>
            <p className="order-success-message">
              Please return to the shop and place an order.
            </p>

            <Link to="/" className="btn btn-primary">
              Back to shop
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container">
        <div className="order-success">
          <h1 className="order-success-title">Thank you for your order</h1>

          <p className="order-success-message">
            Your order was placed successfully.
          </p>

          <div className="order-confirmation-card">
            <div className="order-confirmation-row">
              <span>Order number:</span>
              <strong>{order.orderId}</strong>
            </div>

            <div className="order-confirmation-row">
              <span>Order date:</span>
              <strong>{order.orderDate}</strong>
            </div>

            <div className="order-confirmation-row">
              <span>Estimated delivery:</span>
              <strong>{order.deliveryDate}</strong>
            </div>

            <p className="order-delivery-note">
              Estimated delivery is up to 4 weeks from the order date.
            </p>
          </div>

          <div className="order-items">
            <h2 className="checkout-section-title">Order Details</h2>

            {order.items.map((item) => (
              <div
                className="order-item"
                key={`${item.id}-${item.goldColor}-${item.size}`}
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="checkout-item-image"
                />

                <div className="checkout-item-details">
                  <h3 className="checkout-item-name">{item.product.name}</h3>

                  <p className="checkout-item-price">
                    ${item.product.price} each
                  </p>

                  <p className="checkout-item-option">
                    14K Gold: {item.goldColor}
                  </p>

                  {item.size && (
                    <p className="checkout-item-option">US Size: {item.size}</p>
                  )}

                  <p className="checkout-item-option">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <p className="checkout-item-total">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="order-confirmation-total">
            <span>Total paid:</span>
            <strong>${order.total.toFixed(2)}</strong>
          </div>

          <Link to="/" className="btn btn-primary btn-large">
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
}