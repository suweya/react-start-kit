import React from 'react'
import { IndexRoute, Route, Router, Link, Redirect } from 'react-router'
import AppIndex from './containers/appIndex'
import HomeSmart from './containers/home'

export default function getRoutes() {

    console.log('====================Create Router======================')
    
    return (
        <Route path='/' component={AppIndex}>
            <IndexRoute component={HomeSmart}/>
            <Route path='home' component={HomeSmart}/>
        </Route>
    )
}
