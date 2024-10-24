import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useCart } from './CartContext';

const ProductList = () => {
    const [products, setProducts] = useState([]); // Ensure products is initialized as an empty array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { dispatch } = useCart();

    useEffect(() => {
        fetch('./data/product.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // Extract products array from API response
                const productsArray = data.products; // Assuming data structure is { products: [...] }
                if (Array.isArray(productsArray)) {
                    setProducts(productsArray);
                } else {
                    throw new Error('Products data is not an array');
                }
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message); // Set error message for user-friendly display
                setLoading(false);
            });
    }, []);

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    if (loading) {
        return <div>Loading...</div>; // Consider using a spinner or skeleton loader here
    }

    if (error) {
        return <div>Error: {error}</div>; // Display user-friendly error message
    }

    return (
        <div className="product-list">
            <h2>Product List</h2>
            <ul className="product-grid">
                {products.length > 0 ? ( // Check if products array has items
                    products.map((product) => (
                        <li className="product-card" key={product.id}>
                            <h3>{product.title}</h3>
                            <LazyLoadImage 
                                src={product.image} 
                                alt={product.title} 
                                className="product-image" 
                                effect="blur" 
                                placeholderSrc="https://via.placeholder.com/150" 
                            />
                            <p>Price: ${product.price}</p>
                            <button type="button" className="add-to-cart" onClick={() => addToCart(product)}>
                                Add to Cart
                            </button>
                        </li>
                    ))
                ) : (
                    <li>No products available.</li> // Fallback message if no products
                )}
            </ul>
        </div>
    );
};

export default ProductList;