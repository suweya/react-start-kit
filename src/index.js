'use strict'

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import DevRoot from './root.dev'
import ProdRoot from './root.prod'

const store = configureStore()

let Root
if (process.env.NODE_ENV === 'production') {
    Root = ProdRoot
} else {
    Root = DevRoot
}

render(
    <Root store={store}/>,
    document.getElementById('root')
)
