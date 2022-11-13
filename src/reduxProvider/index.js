import {createContext, useContext, useEffect, useState} from "react";

import  store  from "../store";

const storeContext = createContext(store.getState());

export const useStore = () => useContext(storeContext);

function ReduxProvider({ children }){

    const [state, setState] = useState(store.getState());

    useEffect( () => {
        const unsubscribe = store.subscribe( () => {
            const state = store.getState();
            setState(state);
        } )
        return () => {
            unsubscribe();
        }
    }, [] );


    return <storeContext.Provider value={state} >
        {children}
    </storeContext.Provider>

}

export default ReduxProvider;

