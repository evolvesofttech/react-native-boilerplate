import types from './types';

const INITIAL_STATE = {
    helloText: 'Hello from reducer!',
    isShowText: false
}

const homeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.TOGGLE_TEXT:
            let newState = {
                ...state,
                isShowText: action.value
            }
            return newState;
        default:
            return state;
    }
}

export default homeReducer;