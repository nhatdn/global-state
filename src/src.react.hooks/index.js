import React from "react";
import AddItem from "./components/AddItem"; 
import Provider from "./store/Provider"
const App = () => {
    return (
        <Provider>
            <AddItem>
            </AddItem>
        </Provider>
    )
}

export default App;