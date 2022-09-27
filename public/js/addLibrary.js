// Create the function
import {useEffect} from "react";

export default function addLibrary(urlString) {
  //const script = document.createElement('script');
  //script.src = urlString;
  //script.async = true;
  //document.body.appendChild(script);

  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");

    script.setAttribute("src", urlString);
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, [urlString]);
}