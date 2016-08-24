/**
 * Created by suweya on 16/8/24.
 */
import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Temp extends Component {

    render() {
        return (
            <div>
                <Link to='/home'>Home</Link>
                <h1>Temp Component</h1>
                <h2>Temp Component</h2>
                <h3>Temp Component</h3>
                <h4>Temp Component</h4>
                <h5>Temp Component</h5>
            </div>
        )
    }
}