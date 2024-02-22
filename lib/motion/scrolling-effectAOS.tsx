import { useEffect, useState } from "react";
import AOS from 'aos';

export const useScrollingAOS = () => {
    // Initialize state with undefined width/height, so the server and client render match
    const [scrollAOS, setScrollAOS] = useState(undefined);

    useEffect(() => {
        // only execute all the code below on the client side
        if (typeof window !== 'undefined') {
            // Initialize AOS when the component mounts
            AOS.init();
            AOS.refresh();
            setScrollAOS(AOS);

            // Cleanup function to remove AOS when the component unmounts
            return () => {
                // @ts-ignore
                AOS.destroy();
            };
        }
    }, []); // Empty array ensures that effect is only run on mount

    return scrollAOS;
};


