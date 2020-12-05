import React from 'react';
import { connect } from 'react-redux';

import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.action'

const CartIcon = ({ cartItems, toggleCartHidden }) => {
    // console.log('cartItems: ',cartItems);
    
    const cartItemCounter = cartItems.reduce((acc, cartItem)=> {
        return acc + cartItem.quantity
    }, 0);

    return(
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
        <span className="item-count">{cartItemCounter}</span>
    </div>
)};

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);