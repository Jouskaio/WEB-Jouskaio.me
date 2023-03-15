import {useEffect, useState} from "react";
// @ts-ignore
import AOS from 'aos';


/*export const setScrollingAOS = () => {
    // Initialize state with undefined width/height, so the server and client render match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [scrollAOS, setScroll] = useState({
        scroll: undefined,
    });

    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== 'undefined') {
            // Handler to call on window resize
            const handleResize = () => {
                // Set window width/height to state
                setScroll({
                    scroll: AOS.init()
                });
            };
        }
    }, []); // Empty array ensures that effect is only run on mount
    return scrollAOS;
};*/