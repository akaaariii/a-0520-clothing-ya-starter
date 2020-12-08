import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// import './cart-dropdown.styles.scss'
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./cart-dropdown.styles";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

// const mapStateToProps = (state) => ({
//     cartItems: state.cart.cartItems
// })

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems: cartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
