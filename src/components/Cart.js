// Cart.js
import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import QuantityManager from './QuantityManager';

const Cart = () => {
    const { cart, dispatch } = useCart();
    const navigate = useNavigate();

    const removeFromCart = (item) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: item });
    };

    const handleRemoveClick = (item) => {
        const confirmRemove = window.confirm("Are you sure you want to remove this item?");
        if (confirmRemove) {
            removeFromCart(item);
        }
    };

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div className="cart-page">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id} className="cart-item">
                            <h3>{item.title}</h3>
                            <p>Price: ${item.price}</p>
                            <QuantityManager item={item} />
                            <button onClick={() => handleRemoveClick(item)}>Remove from Cart</button>
                        </li>
                    ))}
                </ul>
            )}
            <div className="cart-summary">
                <h3>Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}</h3>
                <h3>
                    Total Price: $
                    {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                </h3>
                <button onClick={handleCheckout}>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;