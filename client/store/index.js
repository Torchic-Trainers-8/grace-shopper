import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import products from './products';
import product from './product';
import users from './users';
import user from './user';
import cart from './cart';
import order from './order';

const reducer = combineReducers({
  auth,
  product,
  products,
  user,
  users,
  cart,
  order,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
export * from './products';
export * from './product';
export * from './user';
export * from './users';
export * from './cart';
export * from './order';
