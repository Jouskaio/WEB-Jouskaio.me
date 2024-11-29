import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";

// Lazy load ReactPlayer
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

function CardXL({ media, classname, aosDuration, aosEffect, article }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isReady, setIsReady] = useState(false); // Pour gérer le chargement

    useEffect(() => {
        setIsPlaying(true);
    }, []);

    return (
        <div className={`m-cardXL ${classname}`} data-aos={aosEffect} data-aos-duration={aosDuration}>
            {!isReady && <div className="video-loader">Chargement...</div>}
            <ReactPlayer
                className="m-cardXL__a-media"
                url={media}
                controls={false}
                playing={isPlaying}
                muted={true}
                width={"100%"}
                height={"100%"}
                loop={true}
                onReady={() => setIsReady(true)} // Supprime le loader une fois prêt
            />
            <button
                className={`m-cardXL__a-play ${!isPlaying ? "m-cardXL__a-play--play" : ""}`}
                onClick={() => setIsPlaying(!isPlaying)}
            >
                <img
                    src={isPlaying ? "/icons/pause.svg" : "/icons/play.svg"}
                    alt={isPlaying ? "Pause" : "Play"}
                />
            </button>
            {article && (
                <nav className="m-cardXL__a-article">
                    <h5>{article.tag}</h5>
                    <h3>{article.title}</h3>
                    <p>{article.text}</p>
                </nav>
            )}
        </div>
    );
}

CardXL.propTypes = {
    article: PropTypes.shape({
        tag: PropTypes.string,
        title: PropTypes.string,
        text: PropTypes.string,
    }),
    media: PropTypes.string.isRequired,
    classname: PropTypes.string,
    aosDuration: PropTypes.number,
    aosEffect: PropTypes.string,
};

export default CardXL;
