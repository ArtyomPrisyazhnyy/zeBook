import usersReducer from './users';
import productsReducer from './products';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    usersPage: usersReducer,
    productsPage: productsReducer,
})

export default rootReducer