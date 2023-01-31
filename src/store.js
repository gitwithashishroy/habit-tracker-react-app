import { createStore } from "redux";

import rootReducer from "./reducers";

const persistentState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {}
const store = createStore(rootReducer, persistentState) ; 
console.log("store",store);

// const store = createStore(rootReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) ; 

store.subscribe(() => {
    const state = store.getState();
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  }) ; 

export default store ; 

