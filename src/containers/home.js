import { connect } from 'react-redux'
import { add, sub } from '../actions/home'
import Home from '../pages/home'

function mapStateToProps(state) {
    return {
        result: state.home.result
    }
}

function mapDispatchToProps(dispatch) {
    return {
        add: () => dispatch(add()),
        sub: () => dispatch(sub())
    }
}

let HomeSmart = connect(
    mapStateToProps, mapDispatchToProps
)(Home)

export default HomeSmart
