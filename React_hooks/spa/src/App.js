import { useState } from "react";

import "./index.css";
import Joke from "./Joke";
import Stories from "./Stories";
import Tasks from "./Tasks";
import Gallery from "./Gallery";
import Matrix from "./Matrix";

export default function App() {
    const [userQuery, setUserQuery] = useState("");
    const [showGallery, setShowGallery] = useState(true);

    const toggleShowGallery = () => {
        setShowGallery(!showGallery);
    };

    const searchQuery = () => {
        window.open(`https://www.google.com/search?q=${userQuery}`, "_blank");
        setUserQuery("");
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") searchQuery();
    };

    const updateUserQuery = (event) => {
        setUserQuery(event.target.value);
    };

    return (
        <div className="App">
            <h1>Hello Bramha</h1>
            <div className="form">
                <input
                    value={userQuery}
                    onChange={updateUserQuery}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={searchQuery}>Search</button>
            </div>
            <hr />
            <Joke />
            <hr />
            <Tasks />
            <hr />
            <div>{showGallery ? <Gallery /> : null}</div>
            <button onClick={toggleShowGallery}>
                {showGallery ? "Hide " : "Show "}Gallery
            </button>
            <hr />
            <Stories />
            <hr />
            <Matrix />
        </div>
    );
}
