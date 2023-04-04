import React, { useReducer } from "react";
import reducer, { initialState } from "./state/reducers";

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log("state", state);
    return (
        <div className="App">
            <h2>Reaction</h2>
        </div>
    );
}

export default App;
