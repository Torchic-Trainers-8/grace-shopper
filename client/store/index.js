import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import auth from './auth'
import { productsReducer } from './products'
import { productReducer } from './product'
import { userReducer } from './user'
import { usersReducer } from './users'

const reducer = combineReducers({
  auth,
  product: productReducer,
  products: productsReducer,
  user: userReducer,
  users: usersReducer,
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
