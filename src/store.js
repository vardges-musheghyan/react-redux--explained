import createStore from "./redux";

const reducer = (state) => state + 1;

const store = createStore(reducer, 1);

export default store;
