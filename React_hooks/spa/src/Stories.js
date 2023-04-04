import React from "react";
import { useFetch } from "./Hooks";

const Stories = () => {
    const topStories = useFetch(
        "https://news-proxy-230704.appspot.com/topstories",
        []
    );

    return (
        <div className="Sories">
            <h3>Stories</h3>
            {topStories.map((story) => {
                const { id, by, time, title, url } = story;
                return (
                    <div key={id}>
                        <a href={url}>{title}</a>
                        <div>
                            {by} - {new Date(time * 1000).toLocaleDateString()}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Stories;
