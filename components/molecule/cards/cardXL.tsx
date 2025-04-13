import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

type Article = {
    tag?: string;
    title?: string;
    text?: string;
};

type CardXLProps = {
    media: string;
    classname?: string;
    aosDuration?: number;
    aosEffect?: string;
    article?: Article;
};

const CardXL: React.FC<CardXLProps> = ({
                                           media,
                                           classname = "",
                                           aosDuration,
                                           aosEffect,
                                           article,
                                       }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setIsPlaying(true);
    }, []);

    return (
        <div
            className={`m-cardXL ${classname}`}
            data-aos={aosEffect}
            data-aos-duration={aosDuration}
        >
            {!isReady && <div className="video-loader">Chargement...</div>}

            <ReactPlayer
                className="m-cardXL__a-media"
                url={media}
                controls={false}
                playing={isPlaying}
                muted={true}
                width="100%"
                height="100%"
                loop={true}
                onReady={() => setIsReady(true)}
            />

            <button
                className={`m-cardXL__a-play ${
                    !isPlaying ? "m-cardXL__a-play--play" : ""
                }`}
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
};

export default CardXL;