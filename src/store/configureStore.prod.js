import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import createHistory from 'history/lib/createHashHistory'
import createRouter from '../routes'
import thunk from 'redux-thunk'
import apiRequester from '../middleWare/apiRequester'
import rootReducer from '../reducers'

const finalCreateStore = compose(
    applyMiddleware(thunk, apiRequester),
    reduxReactRouter({createRouter, createHistory})
)(createStore)

export default function configureStore(initialState) {
    return finalCreateStore(rootReducer, initialState)
}
