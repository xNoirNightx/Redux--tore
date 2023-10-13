import { createStore, combineReducers, applyMiddleware } from 'redux';
import cartReducer from './reducers/cartReducer'; // cartReducer 
import userReducer from './reducers/userReducer'; //  userReducer 
import productReducer from './reducers/productReducer'; //  productReducer
import categoryReducer from './reducers/categoryReducer'; // categoryReducer 
import orderReducer from './reducers/orderReducer'; // orderReducer 
// interacts with reduxx store dispatc/getstate 
import thunk from 'redux-thunk'; // redux-thunk

// Combine reducers >?
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  products: productReducer,
  categories: categoryReducer,
  orders: orderReducer,
});

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
