import Header_top from "../../molecule/navigation/header_top";
import Side from "../../molecule/navigation/side";
import React from "react";

export default function Header() {
    return (
        <header className={"o-header"}>
            <Header_top
                height={32}
                source={"icons/logo.svg"}
                alt={"Description"}
                classname={"o-header__logo"}
                pages={[
                    {
                        name: "About",
                        source: "/about",
                        class: "o-header__page"
                    },
                    {
                        name: "Projects",
                        source: "/projects",
                        class: "o-header__page"
                    },
                    {
                        name: "Blog",
                        source: "/blog",
                        class: "o-header__page"
                    },
                    {
                        name: "Contact",
                        source: "/contact",
                        class: "o-header__page"
                    }
                ]}/>
            <Side type={"--left"} icons={[
                {src: "/icons/pinterest.png", alt: "Pinterest", href: "https://www.pinterest.fr/jouskaio/", classname: "m-sideGlobal__icon"},
                {src: "/icons/twitter.png", alt: "Twitter", href: "https://twitter.com/Jouskaio_", classname: "m-sideGlobal__icon"},
                {src: "/icons/instagram.png", alt: "Instagram", href: "https://www.instagram.com/jouskaio/", classname: "m-sideGlobal__icon"},
                {src: "/icons/github.png", alt: "GitHub", href: "https://github.com/Jouskaio", classname: "m-sideGlobal__icon"},
                {src: "/icons/linkedin.png", alt: "Linkedin", href: "https://www.linkedin.com/in/manonsalsou/", classname: "m-sideGlobal__icon"},
                {src: "/icons/spotify.png", alt: "Spotify", href: "https://open.spotify.com/user/desespery?si=ac027624ff264504", classname: "m-sideGlobal__icon"},

            ]} classname={"l-home__sideLeft"}/>
            <Side type={"--right"} icons={[
                {src: "/icons/palette.svg", alt: "Palette", href: "#", classname: "m-sideGlobal__icon m-sideGlobal__icon--palette"},
                {src: "/icons/dark-mode.svg", alt: "Dark Mode", href: "", classname: "m-sideGlobal__icon m-sideGlobal__icon--modeChanger"},
            ]} classname={"l-home__sideRight"}/>
        </header>
    )
}