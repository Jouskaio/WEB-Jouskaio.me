// @ts-ignore
import Document, { Html, Head, Main, NextScript } from "next/document";
// @ts-ignore
import Script from "next/script";
import React from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icons/icon-x128.png"></link>
          <meta name="theme-color" content="#AA3C1E" />
          {/*SEO tag*/}
          <link rel="preconnect" href="https://jouskaio-me.herokuapp.com"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="description" content=" Jouskaio.me is the official website of Manon Salsou to discover all of her projects and minds about web/mobile development, AR/VR/3D and latest innovations"/>
          <meta name="robots" content="max-image-preview:large"/>
          {/*<meta name="google-site-verification" content="D-ae7-imhZ5eSM9FC0rKEja4JNM_U0uLDb1AJQhDK3g">*/}
          <meta property="og:locale:alternate" content="fr_FR" />
          <meta property="og:locale:alternate" content="es_ES" />
          <meta property="og:site_name" content="Manon Salsou - Jouskaio's portfolio"/>
          <meta property="og:type" content="article"/>
          <meta property="og:title" content="Manon Salsou - Jouskaio's portfolio"/>
          <meta property="og:description" content="Jouskaio.me is the official website of Manon Salsou to discover all of her projects and minds about web/mobile development, AR/VR/3D and latest innovations"/>
          <meta property="og:url" content="https://www.jouskaio.me/"/>
          <meta property="og:image" content="http://www.jouskaio.me/icon-x512.png"/>
          <meta property="og:image:secure_url" content="http://www.jouskaio.me/icon-x512.png"/>
          <meta property="og:image:width" content="512"/>
          <meta property="og:image:height" content="512"/>
          <meta property="article:published_time" content="2022-07-13T14:33:59+00:00"/>
          <meta property="article:modified_time" content="2022-07-13T14:33:59+00:00"/>
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:title" content="Manon Salsou - Jouskaio's portfolio"/>
          <meta name="twitter:description" content="Jouskaio.me is the official website of Manon Salsou to discover all of her projects and minds about web/mobile development, AR/VR/3D and latest innovations"/>
          <meta name="twitter:image" content="http://www.jouskaio.me/icon-x512.png"/>
          <meta name="google" content="nositelinkssearchbox"/>
          <meta property="og:site_name" content="Manon Salsou - Jouskaio's portfolio"/>
          <meta property="og:locale" content="es_ES"/>
          <meta property="og:type" content="website"/>
          <meta property="og:image:width" content="192"/>
          <meta property="og:image:height" content="192"/>
          <meta property="og:image" content="http://www.jouskaio.me/icon-x192.png"/>

          <script type={"text/javascript"} defer src={"https://code.jquery.com/jquery-3.5.1.min.js"}></script>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/felipec.min.css"/>
          <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
          {/*<script src="https://kit.fontawesome.com/916ffe3022.js" crossOrigin="anonymous" defer></script>*/}
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
