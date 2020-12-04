import { addItemToCart } from './cart.util';

const INITIAL_STATE = {
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
                // cartItems: [...state.cartItems, action.payload]
            }
        default:
            return state
    }
}

export default cartReducer;