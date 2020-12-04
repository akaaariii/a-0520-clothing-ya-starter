import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './cart-dropdown.styles.scss'

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.action'

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

// const mapStateToProps = (state) => ({
//     cartItems: state.cart.cartItems
// })

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems: cartItems
})

export default connect(mapStateToProps)(CartDropdown);