import actionTypes from '../Action/ActionTypes'
const initState = {
    count: 5
}

export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.COUNT_INCREMENT:
            return {...state, count: state.count + 1 };
        case actionTypes.COUNT_DECREMENT:
            return {...state, count: state.count - 1 };
        default:
            return state;
    }
}