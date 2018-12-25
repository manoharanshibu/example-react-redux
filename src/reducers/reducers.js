const initialState = {
    counter: 20
}

export function reducers(state = initialState, action) {
    switch(action.type) {
        case "INCREMENT_COUNTER":
            return {counter: ++state.counter};
        case "DECREMENT_COUNTER":
            return {counter: --state.counter};
        default:
            return initialState;
    }
}