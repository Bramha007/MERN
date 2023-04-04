import React from "react";
import { useFetch } from "./Hooks";

const Joke = () => {
    const { setup, punchline } = useFetch(
        // "http://localhost:3005/jokes/random",
        "https://official-joke-api.appspot.com/jokes/random",
        {}
    );
    return (
        <div>
            <h3>JOKE of the SESSION</h3>
            <p>{setup}</p>
            <p>
                <em>{punchline}</em>
            </p>
        </div>
    );
};
export default Joke;
