import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import createHistory from 'history/lib/createHashHistory'
import getRoutes from '../routes'
import thunk from 'redux-thunk'
import apiRequester from '../middleWare/apiRequester'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const finalCreateStore = compose(
    applyMiddleware(thunk, apiRequester),
    reduxReactRouter({getRoutes, createHistory}),
    applyMiddleware(createLogger()),
    window.devToolsExtension && window.devToolsExtension()
)(createStore)

console.log('==============Configure DEV Store================')

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState)

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
