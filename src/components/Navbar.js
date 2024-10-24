// Navbar.js
import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; // Import the CartContext
import '../index.css'; // Import the CSS file

const Navbar = () => {
    const { cart } = useCart(); // Access the cart from context

    // Calculate total quantity of items in the cart
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="navbar">
            <Link to="/" className="title"> {/* Wrap the h1 with Link */}
                <h1>E-Commerce</h1>
            </Link>
            <div className="cart-icon">
                <Link to="/cart">
                    <FaCartShopping size={24} />
                    {totalQuantity > 0 && (
                        <span className="cart-badge">{totalQuantity}</span>
                    )}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;