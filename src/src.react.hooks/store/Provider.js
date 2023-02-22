import React, { useReducer } from "react";
import Context from "./Context";
import reducer from "./Reducer";
const Provider = ({children}) => {
    const [state, payload] = useReducer(reducer, []);
    return (
        <Context.Provider value={[state, payload]}>
            {children}
        </Context.Provider>
    )
}

export default Provider;