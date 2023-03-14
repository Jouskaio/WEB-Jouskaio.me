import Header_top from "../../molecule/navigation/header_top";
import Side from "../../molecule/navigation/side";
import Icon from '../../atom/icon/icon'
import React from "react";
// @ts-ignore
import $ from "jquery";

export default function Header() {

    // Execute JQuery script
    if (typeof window === "object") {
        // code is running in a browser environment
        $(document).ready(function() {
            $(window).bind('load', function() {
                let root = window.getComputedStyle(document.body);
                let selectedColor;
                let selectedPalette;
                // Handler for .ready() called;
                $(".m-sideGlobal__icon--paletteChoose").click(function () {
                    $(".m-sideGlobal__icon--paletteAccent").toggleClass("hidden");
                    $(".m-sideGlobal__icon--paletteChoose").toggleClass("m-sideGlobal__icon--paletteChooseColor");
                    $(".m-sideGlobal__icon--paletteAccent").each(function (i, obj) {
                        //console.log($.trim($(this).css("color")))
                        //console.log($.trim(root.getPropertyValue("--accent-color")))
                        if($.trim(root.getPropertyValue("--accent-color")) == $.trim($(this).css("color"))) {
                            selectedColor = $.trim(root.getPropertyValue("--accent-color-filter"));
                            //$(this).css("display", "none");
                        }
                    })
                })
                $(".m-sideGlobal__icon--paletteAccent").click(function () {
                    //let getColor = $(this).attr("id");
                    let getColor = $(this).css("color");
                    let getFilter = $(this).css("filter")
                    $(":root").css("--accent-color", getColor);
                    $(":root").css("--accent-color-filter", getFilter);
                    if($.trim(root.getPropertyValue("--accent-color")) == $.trim($(this).css("color"))) {
                        //$(this).css("filter", selectedColor);
                        //selectedPalette.css("display", "block");
                    }
                });
            });
        });
    } else {
        // code is running in a Node.js environment
    }

    return (
        <header className={"o-header"}>
            <Header_top
                height={32}
                source={"/icons/logo.svg"}
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
                {src: "/icons/pinterest.png", alt: "Pinterest", href: "https://www.pinterest.fr/jouskaio/", classname: "m-sideGlobal__icon", id:""},
                {src: "/icons/twitter.png", alt: "Twitter", href: "https://twitter.com/Jouskaio_", classname: "m-sideGlobal__icon", id:""},
                {src: "/icons/instagram.png", alt: "Instagram", href: "https://www.instagram.com/jouskaio/", classname: "m-sideGlobal__icon", id:""},
                {src: "/icons/github.png", alt: "GitHub", href: "https://github.com/Jouskaio", classname: "m-sideGlobal__icon", id:""},
                {src: "/icons/linkedin.png", alt: "Linkedin", href: "https://www.linkedin.com/in/manonsalsou/", classname: "m-sideGlobal__icon", id:""},
                {src: "/icons/spotify.png", alt: "Spotify", href: "https://open.spotify.com/user/desespery?si=ac027624ff264504", classname: "m-sideGlobal__icon", id:""},

            ]} classname={"l-home__sideLeft"}/>
            <Side type={"--right"} icons={[
                {src: "/icons/accent-color.svg", alt: "Palette", href: "#accent", classname: "m-sideGlobal__icon m-sideGlobal__icon--palette m-sideGlobal__icon--paletteAccent hidden", id:"yellow"},
                {src: "/icons/accent-color.svg", alt: "Palette", href: "#accent", classname: "m-sideGlobal__icon m-sideGlobal__icon--palette m-sideGlobal__icon--paletteAccent hidden", id:"green-jade"},
                {src: "/icons/accent-color.svg", alt: "Palette", href: "#accent", classname: "m-sideGlobal__icon m-sideGlobal__icon--palette m-sideGlobal__icon--paletteAccent hidden", id:"purple"},
                {src: "/icons/accent-color.svg", alt: "Palette", href: "#accent", classname: "m-sideGlobal__icon m-sideGlobal__icon--palette m-sideGlobal__icon--paletteAccent hidden", id:"magenta"},
                {src: "/icons/accent-color.svg", alt: "Palette", href: "#accent", classname: "m-sideGlobal__icon m-sideGlobal__icon--palette m-sideGlobal__icon--paletteAccent hidden", id:"blue-dark"},
                {src: "/icons/accent-color.svg", alt: "Palette", href: "#accent", classname: "m-sideGlobal__icon m-sideGlobal__icon--palette m-sideGlobal__icon--paletteAccent hidden", id:"blue-light"},
                {src: "/icons/accent-color.svg", alt: "Palette", href: "#accent", classname: "m-sideGlobal__icon m-sideGlobal__icon--palette m-sideGlobal__icon--paletteChoose"},
                {src: "/icons/logo.svg", alt: "Home", href: "/", classname: "m-sideGlobal__icon"},
            ]} classname={"l-home__sideRight"}/>
        </header>
    )
}