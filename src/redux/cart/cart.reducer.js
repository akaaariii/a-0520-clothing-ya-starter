import { addItemToCart, removeItemFromCart } from './cart.util';

const INITIAL_STATE = {
    cartItems: [],
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
                // cartItems: [...state.cartItems, action.payload] //do not use
            }
        case 'TOGGLE_CART_HIDDEN':
            return{
                ...state,
                hidden: !state.hidden
            }
        case 'REMOVE_ITEM':
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case 'CLEAR_ITEM_FROM_CART':
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem =>
                    cartItem.id !== action.payload.id
                )
            }
        default:
            return state
    }
}

export default cartReducer;