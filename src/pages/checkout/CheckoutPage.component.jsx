import React from 'react';
import {connect} from 'react-redux';

import './CheckoutPage.styles.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems}) => {
    
    const cartTotalPrice = cartItems.reduce((acc, cartItem)=> {
        return acc + cartItem.quantity * cartItem.price
    }, 0);

    return(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Image</span>
            </div>
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>

        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }

        <div className="total">TOTAL: ${cartTotalPrice} </div>
        <div className="warning">
            *Use the following test credit card for payment*
            <br />
            4242 4242 4242 4242 - Exp: 01/22 - CVC: 123
        </div>
        <StripCheckoutButton price={cartTotalPrice} />
    </div>
)};

const mapStateToProps = ({ cart: {cartItems }}) => ({
    cartItems: cartItems
})

export default connect(mapStateToProps)(CheckoutPage);