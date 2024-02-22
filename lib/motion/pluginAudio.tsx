import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProgressBar from 'react-bootstrap/ProgressBar';

const PluginAudio = ({ text, classname, id }) => {
    const [utterance, setUtterance] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isProcessingClick, setIsProcessingClick] = useState(false);
    const [isAudioIcon, setIsAudioIcon] = useState(true); // Variable d'état pour suivre l'état de l'icône
    const [startTime, setStartTime] = useState(0); // Temps de début de la lecture
    const [elapsedTime, setElapsedTime] = useState(0); // Temps écoulé depuis le début de la lecture
    const [progress, setProgress] = useState(0); // Pour suivre la progression de la lecture audio
    const [totalDuration, setTotalDuration] = useState(0); // Durée totale de l'audio en secondes

    useEffect(() => {
        // Ajouter un gestionnaire d'événements pour la fin de la parole
        const handleEnd = () => {
            setIsPlaying(false);
            setIsPaused(false);
            setUtterance(null);
            setProgress(0); // Réinitialiser la progression
            setElapsedTime(0); // Réinitialiser le temps écoulé
            setTotalDuration(0); // Réinitialiser la durée totale
        };
        speechSynthesis.addEventListener("end", handleEnd);
        return () => {
            // Retirer les gestionnaires d'événements
            speechSynthesis.removeEventListener("end", handleEnd);
        };
    }, []);

    useEffect(() => {
        if (!utterance) return;

        const handleStart = () => {
            setStartTime(performance.now()); // Enregistrer le temps de début de la lecture
        };

        const handleProgress = () => {
            if (utterance.currentTime === 0) {
                setTotalDuration(utterance.duration); // Mettre à jour la durée totale de l'audio lorsque les métadonnées sont chargées
            }
            const currentTime = isPaused ? elapsedTime : performance.now() - startTime; // Utiliser le temps écoulé si en pause, sinon mesurer à nouveau le temps écoulé
            const percentage = (currentTime / (totalDuration * 1000)) * 100; // Convertir le temps en secondes et calculer le pourcentage de progression
            setProgress(percentage);
        };

        utterance.addEventListener("start", handleStart);
        utterance.addEventListener("timeupdate", handleProgress);

        return () => {
            utterance.removeEventListener("start", handleStart);
            utterance.removeEventListener("timeupdate", handleProgress);
        };
    }, [utterance, isPaused, startTime, elapsedTime, totalDuration]);

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
            setIsAudioIcon(true); // Basculer vers l'icône audio
            setElapsedTime(performance.now() - startTime); // Mettre à jour le temps écoulé
            setIsProcessingClick(false);
        } else if (isPaused) {
            // Reprise de la lecture
            speechSynthesis.resume();
            setIsPaused(false);
            setIsPlaying(true);
            setIsAudioIcon(false); // Basculer vers l'icône de pause
            setStartTime(performance.now() - elapsedTime); // Mettre à jour le temps de début pour calculer le temps écoulé correctement
            setIsProcessingClick(false);
        } else {
            // Nouvelle lecture
            speechSynthesis.cancel();
            setUtterance(newUtterance); // Définir l'utterance
            speechSynthesis.speak(newUtterance);
            setIsPlaying(true);
            setIsAudioIcon(false); // Basculer vers l'icône de pause
            setIsProcessingClick(false);
        }
    };

    return (
        <div className="m-pluginAudio">
            <img
                id={"pluginAudio" + id.toString()}
                className={`a-icon__audio ${classname}`}
                src={isAudioIcon ? "/icons/play.svg" : "/icons/pause.svg"} // Utilisation de la variable d'état pour sélectionner l'icône appropriée
                onClick={handleClick}
                alt="Audio"
            />
            {/* TODO: The progress bar doesn't evolve
            <ProgressBar variant="info" now={progress} label={`${progress}%`} />
            */}
        </div>
    );
};

PluginAudio.propTypes = {
    text: PropTypes.string.isRequired,
    classname: PropTypes.string,
    id: PropTypes.any,
};

export default PluginAudio;
