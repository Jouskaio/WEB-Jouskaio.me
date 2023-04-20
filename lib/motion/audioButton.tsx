import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const AudioButton = ({ text, classname, id }) => {
    const [utterance, setUtterance] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isProcessingClick, setIsProcessingClick] = useState(false);

    useEffect(() => {
// Ajouter un gestionnaire d'événements pour la fin de la parole
        const handleEnd = () => {
            setIsPlaying(false);
            setIsPaused(false);
            setUtterance(null);
        };
        speechSynthesis.addEventListener("end", handleEnd);
        return () => {
// Retirer le gestionnaire d'événements pour la fin de la parole
            speechSynthesis.removeEventListener("end", handleEnd);
        };
    }, []);

    const handleClick = () => {
    // Si un clic est déjà en cours de traitement, ignorer ce clic.
        if (isProcessingClick) {
            return;
        }

        setIsProcessingClick(true);

        const button = document.getElementById("audioButton" + id);
        const newUtterance = new SpeechSynthesisUtterance(text.replace(/<[^>]+>/g, ""));
        newUtterance.rate = 0.75;

        if (isPlaying && !isPaused) {
            // En pause
            speechSynthesis.pause();
            setIsPaused(true);
            setIsPlaying(false);
            if (button) {
                button.classList.remove("playing");
                button.classList.add("paused");
            }
            setIsProcessingClick(false);
        } else if (isPaused) {
            // Reprise de la lecture
            speechSynthesis.resume();
            setIsPaused(false);
            setIsPlaying(true);
            if (button) {
                button.classList.remove("paused");
                button.classList.add("playing");
            }
            setIsProcessingClick(false);
        } else {
            // Nouvelle lecture
            speechSynthesis.cancel();
            speechSynthesis.speak(newUtterance);
            setIsPlaying(true);
            setUtterance(newUtterance);
            if (button) {
                button.classList.add("playing");
            }
            setIsProcessingClick(false);
        }
    };

    return (
        <input
            id={"audioButton" + id.toString()}
            className={`a-icon__audio ${classname}`}
            src="/icons/audio.png"
            name="Vocal"
            type="image"
            onClick={handleClick}
            alt="Audio"
        />
    );
};

AudioButton.propTypes = {
    text: PropTypes.string.isRequired,
    classname: PropTypes.string,
    id: PropTypes.any,
};

export default AudioButton;