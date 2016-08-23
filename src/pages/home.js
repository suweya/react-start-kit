import React, { Component, PropTypes } from 'react'

export default class Home extends Component {

    render() {
        return (
            <div>
                <h1>Increment</h1>
                <button onClick={this.props.add}>+</button>
                <button onClick={this.props.sub}>-</button>
                <div>{this.props.result}</div>
            </div>
        )
    }
}

Home.propTypes = {
    add: PropTypes.func.isRequired,
    sub: PropTypes.func.isRequired,
    result: PropTypes.number.isRequired
}