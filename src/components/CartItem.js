// CartItem.js
import React, { useState } from 'react';
import Modal from './Modal';

const CartItem = ({ item, onRemove }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleRemoveClick = () => {
        setIsModalOpen(true);
    };

    const handleConfirmClick = () => {
        onRemove(item);
        setIsModalOpen(false);
    };

    const handleCancelClick = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={handleRemoveClick}>Remove</button>
            <Modal
                isOpen={isModalOpen}
                onClose={handleCancelClick}
                onConfirm={handleConfirmClick}
            />
        </div>
    );
};

export default CartItem;