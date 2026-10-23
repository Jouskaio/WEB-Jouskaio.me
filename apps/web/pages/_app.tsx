// @ts-ignore
import React, {useState} from "react";

import { projects as projectList } from "../lib/projects";
import { Footer, Header, Alert, SkipLink, SkipLinkTarget, Toolbar, useWindowSize, JouskaioProvider } from "@jouskaio/ui";


// Shown in the header
const pages = [
    { name: "home.", url: "/" },
    { name: "about.", url: "/about" },
    { name: "work.", url: "/work" },
    { name: "blog.", url: "https://blog.jouskaio.me" },
];

// Case studies and CVs of the menu
const projects = projectList.map(({ slug, name, tagline, icon, stack }) => ({
    name,
    tagline,
    url: `/work/${slug}`,
    icon,
    tags: stack.slice(0, 2),
}));

const resumes = [
    { name: "CV (français)", url: "/cv/manon-salsou-cv-fr.pdf", lang: "fr" },
    { name: "Resume (English)", url: "/cv/manon-salsou-cv-en.pdf", lang: "en" },
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
          <SkipLink />
          <main className={"l-main"}>
              <Header
                  pages={pages.map((page) => ({ name: page.name, source: page.url, class: "o-header__page" }))}
              />

              <div className={"l-main__o-paramsDiv"}>
                  {sizeAOS && (
                      <Toolbar
                          projects={projects}
                          workUrl="/work"
                          resumes={resumes}
                          email={EMAIL}
                          menuClassName={"l-main__a-moreMenu"}
                          settingsClassName={"l-main__a-param"}
                          aosEffect={size && size.width <= 768 ? "fade-down" : "fade-left"}
                      />
                  )}
              </div>
              <SkipLinkTarget />
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
