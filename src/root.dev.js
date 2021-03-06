import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import getRoutes from './routes'

export default class Root extends Component {
    render() {
        const { store } = this.props
        return (
            <Provider store={store}>
                {getRoutes(store)}
            </Provider>
        )
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired
}
