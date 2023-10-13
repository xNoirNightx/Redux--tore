// redux/reducers/index.js
import { combineReducers } from 'redux';
import cartReducer from './cartReducer'; 
import otherReducer from './otherReducer'; 

const rootReducer = combineReducers({
  cart: cartReducer, 
  other: otherReducer,
});

export default rootReducer;