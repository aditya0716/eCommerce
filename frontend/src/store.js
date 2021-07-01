import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
import logger from "redux-logger";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
