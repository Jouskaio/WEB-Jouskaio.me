import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Image from 'next/image';

interface PluginAudioProps {
    text: string;
    classname?: string;
    id: string | number;
}

const PluginAudio = ({ text, classname = "", id }: PluginAudioProps) => {
    const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isProcessingClick, setIsProcessingClick] = useState(false);
    const [isAudioIcon, setIsAudioIcon] = useState(true); // State variable to track the icon state
    const [startTime, setStartTime] = useState(0); // Playback start time
    const [elapsedTime, setElapsedTime] = useState(0); // Elapsed time since the beginning of playback
    const [progress, setProgress] = useState(0); // To track audio playback progress
    const [totalDuration, setTotalDuration] = useState(0); // Total audio duration in seconds

    useEffect(() => {
        // Add an event listener for when speech ends
        const handleEnd = () => {
            setIsPlaying(false);
            setIsPaused(false);
            setUtterance(null);
            setProgress(0); // Reset progress
            setElapsedTime(0); // Reset elapsed time
            setTotalDuration(0); // Reset total duration
        };
        speechSynthesis.addEventListener("end", handleEnd);
        return () => {
            // Remove event listeners
            speechSynthesis.removeEventListener("end", handleEnd);
        };
    }, []);

    useEffect(() => {
        if (!utterance) return;

        const handleStart = () => {
            setStartTime(performance.now()); // Record playback start time
        };

        const handleProgress = () => {
            // SpeechSynthesisUtterance doesn't have currentTime/duration
            // This is a placeholder for logic that might be improved later
            const currentTime = isPaused ? elapsedTime : performance.now() - startTime; 
            const percentage = totalDuration > 0 ? (currentTime / (totalDuration * 1000)) * 100 : 0;
            setProgress(percentage);
        };

        utterance.addEventListener("start", handleStart);
        // utterance.addEventListener("timeupdate", handleProgress); // Not supported

        return () => {
            utterance.removeEventListener("start", handleStart);
            // utterance.removeEventListener("timeupdate", handleProgress);
        };
    }, [utterance, isPaused, startTime, elapsedTime, totalDuration]);

    const handleClick = () => {
        // If a click is already being processed, ignore this click.
        if (isProcessingClick) {
            return;
        }

        setIsProcessingClick(true);

        const button = document.getElementById("audioButton" + id);
        const newUtterance = new SpeechSynthesisUtterance(text.replace(/<[^>]+>/g, ""));
        newUtterance.rate = 0.75;

        if (isPlaying && !isPaused) {
            // Paused
            speechSynthesis.pause();
            setIsPaused(true);
            setIsPlaying(false);
            setIsAudioIcon(true); // Toggle to audio icon
            setElapsedTime(performance.now() - startTime); // Update elapsed time
            setIsProcessingClick(false);
        } else if (isPaused) {
            // Resume playback
            speechSynthesis.resume();
            setIsPaused(false);
            setIsPlaying(true);
            setIsAudioIcon(false); // Toggle to pause icon
            setStartTime(performance.now() - elapsedTime); // Update start time to calculate elapsed time correctly
            setIsProcessingClick(false);
        } else {
            // New playback
            speechSynthesis.cancel();
            setUtterance(newUtterance); // Set the utterance
            speechSynthesis.speak(newUtterance);
            setIsPlaying(true);
            setIsAudioIcon(false); // Toggle to pause icon
            setIsProcessingClick(false);
        }
    };

    return (
        <div className="m-pluginAudio">
            <Image
                id={"pluginAudio" + id.toString()}
                className={`a-icon__audio ${classname}`}
                src={isAudioIcon ? "/icons/play.svg" : "/icons/pause.svg"} // Use state variable to select the appropriate icon
                onClick={handleClick}
                alt="Audio"
                width={20}
                height={20}
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
