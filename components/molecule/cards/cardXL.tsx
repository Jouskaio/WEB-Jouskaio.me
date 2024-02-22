import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

// Delete hydration UI
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

import TextH5 from "../../atom/text/textH5";
import TextH3 from "../../atom/text/textH3";
import TextDefault from "../../atom/text/TextDefault";

function CardXL(props) {
    const {
        article: article,
        media: media,
        classname: classname,
        aosDuration: aosDuration,
        aosEffect: aosEffect,
    } = props;

    const [isPlaying, setIsPlaying] = useState(true);

    // Démarrage automatique de la vidéo
    useEffect(() => {
        setIsPlaying(true);
    }, []);

    return (
        <div className={`m-cardXL ${classname}`} data-aos={aosEffect} data-aos-duration={aosDuration}>
            <div className="m-cardXL__a-media-wrapper">
                <ReactPlayer
                    className="m-cardXL__a-media"
                    url={media}
                    controls={false}
                    playing={isPlaying}
                    muted={true}
                    width={"100%"}
                    height={"100%"}
                    loop={true}
                />
                <button className={`m-cardXL__a-play ${!isPlaying ? 'm-cardXL__a-play--play' : ''}`} onClick={() => setIsPlaying(!isPlaying)}>
                    <img src={isPlaying ? "/icons/pause.svg" : "/icons/play.svg"} alt={isPlaying ? "pause" : "play"} className={isPlaying ? 'playing' : ''} />
                </button>
            </div>
            {/*If it's an article */}
            {article && (
                <nav className={"m-cardXL__a-article"}>
                    <TextH5>{article.tag}</TextH5>
                    <TextH3>{article.title}</TextH3>
                    <TextDefault>{article.text}</TextDefault>
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
        url: PropTypes.string,
    }),
    media: PropTypes.string.isRequired,
    classname: PropTypes.string,
    aosDuration: PropTypes.number,
    aosEffect: PropTypes.string,
};

export default CardXL;
