function createStore(reducer, initialState ){

    let state = initialState;
    let subscribers = [];
    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state, action);
        subscribers.forEach(s => s());
    }

    const subscribe = (subscriber) => {
        subscribers.push(subscriber);
        return () => {
            subscribers = subscribers.filter( s => s !== subscriber );
        }
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}

export default createStore;
