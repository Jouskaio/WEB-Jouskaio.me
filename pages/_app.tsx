import '../styles/globals.scss'
import Header from "../components/organism/navigation/header";
import React from "react";
import Footer from "../components/organism/navigation/footer";

function MyApp({ Component, pageProps }) {

  return (
      <main className={"l-main__a-sizeSection"}>
        <Header/>
        <Component {...pageProps} />
        <Footer className={"l-main__footer"}>Made with ♥ by @Jouskaio - 2023</Footer>
      </main>
  )
}

export default MyApp
