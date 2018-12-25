export const incrementAction = (state) => {
    return {
        type: "INCREMENT_COUNTER",
        payload: state
    }
};

export const decrementAction = (state) => ({
    type: "DECREMENT_COUNTER",
    payload: state
});