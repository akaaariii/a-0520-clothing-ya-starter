import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//imports of the rest of reducers
import userReducer from './user/user.reducer';
import shopReducer from './shop/shop.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({ 
    user: userReducer,
    shop: shopReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);