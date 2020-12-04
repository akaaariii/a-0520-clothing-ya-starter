import React from 'react';
import {connect} from 'react-redux';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
    const { imageUrl, name, quantity, price } = cartItem;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow">&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow">&#10095;</div>
            </span>
            <span className="price">${price * quantity}</span>
            <span className="remove-button">&#10005;</span>
        </div>
    )
}

export default connect()(CheckoutItem);