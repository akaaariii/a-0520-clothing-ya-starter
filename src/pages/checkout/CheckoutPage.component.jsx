import React from 'react';
import {connect} from 'react-redux';

import './CheckoutPage.styles.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({cartItems}) => (
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

        <div className="total">TOTAL: </div>
    </div>


);

const mapStateToProps = ({ cart: {cartItems }}) => ({
    cartItems: cartItems
})

export default connect(mapStateToProps)(CheckoutPage);