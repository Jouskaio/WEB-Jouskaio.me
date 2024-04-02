import '../styles/globals.scss'
// @ts-ignore
import React, {useEffect, useState} from "react";
import Image from 'next/image'

import Footer from "../components/organism/navigation/footer";
import Header from "../components/organism/navigation/header";
import Alert from "../components/molecule/navigation/alert";
import {useWindowSize} from "../lib/motion/sizeWindow";
import {useScrollingAOS} from "../lib/motion/scrolling-effectAOS";


function MyApp({ Component, pageProps }) {

    const useAOS = useScrollingAOS();
    const size = useWindowSize();
    const sizeAOS = size && size.width !== undefined;

    // Function to show the alert
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState(""); // Store the alert message
    const alert = (message) => {
        if (message != null) {
            setAlertMessage(message); // Set the message for the alert
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
        }
    };

    return (
      <main className={"l-main"}>
          <Header
              pages={[
                  {
                      name: "home.",
                      source: "/",
                      class: "o-header__page"
                  },
                  {
                      name: "work.",
                      source: "/work",
                      class: "o-header__page"
                  },
                  {
                      name: "blog.",
                      source: "/blog",
                      class: "o-header__page"
                  },
                  {
                      name: "contact.",
                      source: "/contact",
                      class: "o-header__page"
                  }
              ]}/>

          <div className={"l-main__o-paramsDiv"}>
              {sizeAOS && (
                  <>
                      <button className={"l-main__a-moreMenu"} data-aos={size && size.width <= 768 ? "fade-down" : "fade-left"} data-aos-duration={1000}><Image src="/icons/more.svg" alt="More" height={"16"} width={"16"}/></button>
                      <button className={"l-main__a-param"} data-aos={size && size.width <= 768 ? "fade-down" : "fade-left"} data-aos-duration={1200}><Image src={"/icons/params.svg"} alt={"Param"} height={"16"} width={"16"}/></button>
                  </>
              )}
          </div>
          <Component {...pageProps} alert={alert} />
          {showAlert && (
              <Alert classname={"l-main__o-alert"}>
                    {alertMessage}
              </Alert>
          )}
          <Footer classname={"l-main__o-footer"}/>
      </main>
  )
}

export default MyApp
