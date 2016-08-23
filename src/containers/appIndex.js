/**
 * Web app container in route
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class AppIndex extends Component {

    constructor(props) {
        super(props)
        console.log('AppIndex Constructor')
    }

    render() {
        console.log('AppIndex Render')
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(AppIndex)

AppIndex.propTypes = {}