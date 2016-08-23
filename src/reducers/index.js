import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'
import home from './home'

export default combineReducers({
    router: routerStateReducer,
    home
})
