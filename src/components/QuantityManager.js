// QuantityManager.js
import React from 'react';
import { useCart } from './CartContext';

const QuantityManager = ({ item }) => {
    const { updateQuantity } = useCart();

    const handleIncrement = () => {
        updateQuantity(item.id, item.quantity + 1);
    };

    const handleDecrement = () => {
        if (item.quantity > 1) {
            updateQuantity(item.id, item.quantity - 1);
        }
    };

    return (
        <div className="quantity-manager">
            <button className="quantity-button" onClick={handleDecrement}>
                -
            </button>
            <span className="quantity">{item.quantity}</span>
            <button className="quantity-button" onClick={handleIncrement}>
                +
            </button>
            {/* Removed the Remove button */}
        </div>
    );
};

export default QuantityManager;