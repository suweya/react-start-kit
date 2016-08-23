import { ADD, SUB } from '../actions/home'

const initializeState = {
    result: 0
}

const home = (state = initializeState, action) => {
    switch (action.type) {
        case ADD:
            return Object.assign({}, state, {result:state.result+1})
        case SUB:
            return Object.assign({}, state, {result:state.result-1})
        default:
            return state
    }
}

export default home