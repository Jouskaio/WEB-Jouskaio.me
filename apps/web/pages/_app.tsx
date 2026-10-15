// @ts-ignore
import React, {useState} from "react";

import { Footer, Header, Alert, Toolbar, useWindowSize, JouskaioProvider } from "@jouskaio/ui";


// Shown in the header and in the quick navigation of the toolbar
const pages = [
    { name: "home.", url: "/" },
    { name: "about.", url: "/about" },
    { name: "work.", url: "/work" },
    { name: "blog.", url: "https://blog.jouskaio.me" },
];

const contacts = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/manonsalsou/" },
    { name: "GitHub", url: "https://github.com/Jouskaio" },
];

// Same address as the footer
const EMAIL = "manon.salsou@icloud.com";

function MyApp({ Component, pageProps }) {

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
            }, 1500);
        }
    };

    return (
      <JouskaioProvider>
          <main className={"l-main"}>
              <Header
                  pages={pages.map((page) => ({ name: page.name, source: page.url, class: "o-header__page" }))}
              />

              <div className={"l-main__o-paramsDiv"}>
                  {sizeAOS && (
                      <Toolbar
                          pages={pages.map((page) => ({ name: page.name.replace(/\.$/, ""), url: page.url }))}
                          contacts={contacts}
                          email={EMAIL}
                          menuClassName={"l-main__a-moreMenu"}
                          settingsClassName={"l-main__a-param"}
                          aosEffect={size && size.width <= 768 ? "fade-down" : "fade-left"}
                      />
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
      </JouskaioProvider>
  )
}

export default MyApp
