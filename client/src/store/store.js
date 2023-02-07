import { applyMiddleware, combineReducers, createStore } from "redux";
import productsReducer from "./products-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers({
    userPage: usersReducer,
    productsPage: productsReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store

export default store;