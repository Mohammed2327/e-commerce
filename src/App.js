import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './components/CartContext';

const Layout = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </>
    );
};

const App = () => {
    return (
        <CartProvider>
            <Layout />
        </CartProvider>
    );
};

export default App;
