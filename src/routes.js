import React from 'react'
import {IndexRoute, Route, Router, hashHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import AppIndex from './containers/appIndex'
import HomeSmart from './containers/home'
import Temp from './pages/Temp'

export default function getRoutes(store) {

    console.log('====================Create Router======================')

    // Create an enhanced history that syncs navigation events with the store
    const history = syncHistoryWithStore(hashHistory, store)

    return (
        <Router history={history}>
            <Route path="/" component={AppIndex}>
                <IndexRoute component={Temp}/>
                <Route path="home" component={HomeSmart}/>
                <Route path='temp' component={Temp}/>
            </Route>
        </Router>
    )
}
