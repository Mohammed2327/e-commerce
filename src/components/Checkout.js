// Checkout.js
import React, { useState } from 'react';
import { useCart } from './CartContext';
import QuantityManager from '../components/QuantityManager';

const Checkout = () => {
    const { cart } = useCart();
    const [paymentOption, setPaymentOption] = useState('');
    const [orderMessage, setOrderMessage] = useState(''); // State for order message

    const handlePaymentChange = (event) => {
        setPaymentOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Check if a payment option is selected
        if (paymentOption) {
            setOrderMessage(`Order placed successfully with payment option: ${paymentOption}`);
            console.log(`Selected payment option: ${paymentOption}`);
            // You can add further logic to process the payment
        } else {
            setOrderMessage('Please select a payment option.'); // Error message if no option is selected
        }
    };

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            <div className="cart-items">
                {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <h3>{item.title}</h3>
                        <p>Price: ${item.price}</p>
                        <QuantityManager item={item} />
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <h3>Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}</h3>
                <h3>
                    Total Price: $
                    {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                </h3>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="payment-options">
                    <h3>Payment Options</h3>
                    <ul>
                        <li>
                            <input
                                type="radio"
                                id="cod"
                                name="payment-option"
                                value="cod"
                                checked={paymentOption === 'cod'}
                                onChange={handlePaymentChange}
                            />
                            <label htmlFor="cod">Cash on Delivery (COD)</label>
                            <p>Pay with cash when your order is delivered.</p>
                        </li>
                        <li>
                            <input
                                type="radio"
                                id="upi"
                                name="payment-option"
                                value="upi"
                                checked={paymentOption === 'upi'}
                                onChange={handlePaymentChange}
                            />
                            <label htmlFor="upi">UPI</label>
                            <p>Pay using your UPI ID.</p>
                        </li>
                        <li>
                            <input
                                type="radio"
                                id="card"
                                name="payment-option"
                                value="card"
                                checked={paymentOption === 'card'}
                                onChange={handlePaymentChange}
                            />
                            <label htmlFor="card">Card Payments</label>
                            <p>Pay using your credit or debit card.</p>
                        </li>
                        <li>
                            <input
                                type="radio"
                                id="paypal"
                                name="payment-option"
                                value="paypal"
                                checked={paymentOption === 'paypal'}
                                onChange={handlePaymentChange}
                            />
                            <label htmlFor="paypal">PayPal</label>
                            <p>Pay using your PayPal account.</p>
                        </li>
                    </ul>
                </div>
                <button type="submit" className="checkout-button">Place Order</button>
            </form>
            {orderMessage && <div className="order-message">{orderMessage}</div>} {/* Display the order message */}
        </div>
    );
};

export default Checkout;