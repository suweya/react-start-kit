import { createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/lib/createHashHistory'
import thunk from 'redux-thunk'
import apiRequester from '../middleWare/apiRequester'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const finalCreateStore = compose(
    applyMiddleware(thunk, apiRequester),
    applyMiddleware(createLogger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
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
