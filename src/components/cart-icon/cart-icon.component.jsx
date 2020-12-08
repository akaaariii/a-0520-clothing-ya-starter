import React from 'react';
import { connect } from 'react-redux';

// import './cart-icon.styles.scss';
import {
    CartContainer,
    ShoppingIcon,
    ItemCountContainer,
  } from "./cart-icon.styles";

// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.action'

const CartIcon = ({ cartItems, toggleCartHidden }) => {
    
    const cartItemCounter = cartItems.reduce((acc, cartItem)=> {
        return acc + cartItem.quantity
    }, 0);

    return(
    <CartContainer onClick={toggleCartHidden} >
        <ShoppingIcon />
        <ItemCountContainer>{cartItemCounter}</ItemCountContainer>
    </CartContainer>
)};

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);