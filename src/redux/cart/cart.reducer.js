import { addItemToCart } from './cart.util';

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
        default:
            return state
    }
}

export default cartReducer;