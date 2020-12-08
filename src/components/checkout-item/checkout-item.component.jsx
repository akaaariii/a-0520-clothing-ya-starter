import React from 'react';
import {connect} from 'react-redux';

// import './checkout-item.styles.scss';
import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer,
  } from "./checkout-item.styles";

import { addItem, removeItem, clearItemFromCart } from '../../redux/cart/cart.action'

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
    const { imageUrl, name, quantity, price } = cartItem;
    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div className="arrow" onClick={() => removeItem(cartItem)} >&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)} >&#10095;</div>
            </QuantityContainer>
            <TextContainer>${price * quantity}</TextContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)} >&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearItem: item => dispatch(clearItemFromCart(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);