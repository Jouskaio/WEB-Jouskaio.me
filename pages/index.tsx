// @ts-ignore
import Head from 'next/head'
// @ts-ignore
import Image from 'next/image'
import React, {useDebugValue, useEffect, useState} from 'react';
import Side from "../components/molecule/navigation/side";
import Header from "../components/organisms/navigation/header";
import TextLink from "../components/atom/text/textLink";
import Iframe from "../components/atom/media/iframe";
import {useWindowSize} from "../components/protons/tools/sizeWindow";
// @ts-ignore
import AOS from 'aos';
//import {setScrollingAOS} from "../components/protons/tools/scrolling-effectAOS";
import TextH1 from "../components/atom/text/textH1";
import TextSpanM from "../components/atom/text/textSpanM";
import TextH4 from "../components/atom/text/textH4";
import Media from "../components/atom/media/media";
import Code from "../components/atom/code/code";
import Button from "../components/atom/button/button";
// @ts-ignore
import Link from "next/link";
import TextH5 from "../components/atom/text/textH5";
import TextH3 from "../components/atom/text/textH3";
import Swipe from "../components/molecule/navigation/swipe";
import TitleWithTags from "../components/molecule/quotes/title-with-tags";
import {client} from "../lib/blog/apolloClient";
// @ts-ignore
import {ApolloProvider} from "@apollo/client";
import Query from "../lib/blog/api";
import LATEST_ARTICLES_QUERY from "../lib/blog/article/latest-articles";
import SliderScroll from "../components/molecule/sliders/slider-scroll";

export default function Home() {

    const size = useWindowSize();
    //TODO: scroll and headerHidden not working
    //const scroll = setScrollingAOS();

    if(!client) {
        return <p>Loading</p>
    }
    return (
        <>
            {/* Initialize Effect */}
            {/*{scroll.scroll}*/}
            <Head>
                <title>Manon Salsou - Jouskaio's portfolio 2022</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <>
                <ApolloProvider client={client}>
                    <main className={"l-home__m-main"}>
                    <header className={"l-home__header"}>
                        <Header
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
                            {src: "/icons/pinterest.png", alt: "Pinterest", href: "#", classname: "m-sideGlobal__icon"},
                            {src: "/icons/twitter.png", alt: "Twitter", href: "#", classname: "m-sideGlobal__icon"},
                            {src: "/icons/instagram.png", alt: "Instagram", href: "#", classname: "m-sideGlobal__icon"},
                            {src: "/icons/github.png", alt: "GitHub", href: "#", classname: "m-sideGlobal__icon"},
                            {src: "/icons/linkedin.png", alt: "Linkedin", href: "#", classname: "m-sideGlobal__icon"},
                            {src: "/icons/spotify.png", alt: "Spotify", href: "#", classname: "m-sideGlobal__icon"},

                        ]} classname={"l-home__sideLeft"}/>
                        <Side type={"--right"} icons={[
                            {src: "/icons/palette.svg", alt: "Palette", href: "#", classname: "m-sideGlobal__icon"},
                            {src: "/icons/dark-mode.svg", alt: "Dark Mode", href: "#", classname: "m-sideGlobal__icon"},
                        ]} classname={"l-home__sideRight"}/>
                    </header>
                    <section className={"l-home__o-homepage"}>
                        <Iframe src={undefined} width={size.width} height={size.height} classname={"l-home__m-videoHome"} id={undefined} title={undefined}/>
                        <Swipe content={"Discover"} src={"icons/arrow.svg"} width={16} height={16} classname={"l-home__m-swipe"} alt={"Scroll down"}/>
                    </section>

                    <section className={"l-home__a-sizeSection"}>
                        <div className={"l-home__m-title"}>
                            <TextH1 classname={"l-home__a-titleText"}>Hello ! I’m Manon Salsou</TextH1>
                            <div className="l-home__a-division"></div>
                            <TextH4>
                            <span className={"l-home__a-span"}>
                            Mobile</span> / <span className={"l-home__a-span"}>Web</span> developer and
                                <span className={"l-home__a-span"}> IoT</span> software engineer
                                <br/>Currently developing
                                <span className={"l-home__a-span"}> AR</span> and <span className={"l-home__a-span"}>VR</span> applications at home
                            </TextH4>
                        </div>
                        <nav className={"l-home__a-logoProfile"}><Media classname={""} src={"/icons/swift.svg"} width={116} height={"100%"} alt={"Logo"}/></nav>
                        <Code language={"javascript"} classname={"l-home__a-code"}>
{`
const jouskaio = {
    pronouns: "She" | "Her",
    formation: ["Digital Project Manager Bachelor", "Degree in computer engineering - 3iL"],
    askMeAbout: ["web dev", "tech", "app dev", "ios", "AR", "VR"],
    skills: {
        websiteAndMobile: {
        backEnd: ["PHP", "Symfony", "Docker", "Bash", "Wordpress", "Node.js", "Java"],
        frontEnd: ["HTML", "CSS", "Javacript", "Angular", "React", "Angular", "jQuery" ],
        mobileApp: ["ARKit", "Swift", "Kotlin"],
        devOps: ["AWS", "Docker🐳", "Nginx"],
        databases: ["mongo", "MySql", "sqlite", "postgreSQL"]
    },
    InteractiveDesign : {
        uxUi : ["Suite Adobe", "Design Thinking", "UX research techniques",
        "Benchmark", "Personae", "Experience Map", "Wireframe",
        "Prototype"],
        animation : ["Motion", "3D"]
    },
    trafficAmelioration: {
        traffic: ["Web Marketing", "E-Business", "Data Intelligence",
        "Semantic", "Traffic Management", "SEO", "ASO", "SEA",
        "CRM", "Social media"],
        createContent: ["Content Marketing", "Brand Content", "Media Content"]
    },
    specialities : ["Embedded systems", "management", "Agility and Scrum", "TOEIC"]
    },
    compagniesWorkedWith: ["Orange", "RATP", "Novæ Memoræ", "Santarelli"],
    funFact: ["My name is contraction of Jouska and I/O.
    Jouska means 'A hypothetical conversation that you compulsively play out in your head' which is usually the
    behavior I always have when reflecting about a future decision"]
};
`}
                        </Code>
                        <nav className={"l-home__a-buttonProfileNav"}><Button classname={"l-home__a-buttonProfile"} src={"/about"}>More about it</Button></nav>
                    </section>

                    <section className={"l-home__a-sizeSection l-home__o-news"}>
                        <div className={"l-home__m-containerInfo"}>
                            <TextH5>New Update 07/03/2022</TextH5>
                            <div className="l-home__a-division l-home__a-divisionInfo"></div>
                            <TextH3 classname={"l-home-__a-infoText"}>“ I recently create my blog, the first article will arrived soon. You can subscribe to the newsletter to be aware of its posting “</TextH3>
                            {/*TODO: Create newsletter*/}
                            <nav className={"l-home__a-buttonProfileNav"}><Button classname={"l-home__a-buttonProfile l-home__a-buttonNews"} src={"/about"}>Subscribe to the newsletter</Button></nav>
                        </div>
                        <Query query={LATEST_ARTICLES_QUERY} value={7}>
                            {({ data: { articles } }) => {
                                if (articles.data.length) {
                                    return (
                                        <div className={"l-home__m-containerNews"}>
                                            <span className={"l-home__title"}><TextH3>Latest News</TextH3></span>
                                            <div className={"l-home__m-containerArticles"}>
                                                {articles.data.map(function (article, i) {
                                                let tags = []
                                                article.attributes.categories.data.map(function (categorie, i) {
                                                    tags.push({name : categorie.attributes.name, color: categorie.attributes.color, classname:"", link: "/blog/category/"+categorie.attributes.slug})
                                                })
                                                //TODO: Create a tag pages
                                                article.attributes.tags.data.map(function (tag, i) {
                                                    tags.push({name : tag.attributes.name, color: tag.attributes.color, classname:"", link: "/blog/category/"+tag.attributes.slug})
                                                })

                                                return (
                                                    <nav key={i}><TitleWithTags key={i} titleName={article.attributes.title}
                                                                        titleClassname={"m-titleWithTag__title"} libelled={article.attributes.language} tags={tags} itemClassname={"l-home__a-newsArticle"} linkTitle={"/blog"}/></nav>
                                                )
                                            })}
                                            </div>
                                        </div>
                                        )

                                }
                            }
                            }
                        </Query>
                        <nav className={"l-home__a-buttonNewsNav"}>
                            <Button classname={"l-home__a-buttonNews"} src={"/blog"}>View Blog</Button>
                            <Button classname={"l-home__a-buttonNews"} src={"/projects"}>View all projects</Button>
                        </nav>
                    </section>
                    <section className={"l-home__a-sizeSection l-home__o-projects"}>
                        <SliderScroll slides={[
                            {type: "default", tag: "Docker", title: "Templates Docker", subtitle: "", text: "Differents exemples of Docker set-up", media: "https://jouskaio-me.herokuapp.com/uploads/default_image_942bef2801.png?updated_at=2022-11-02T23:10:03.494Z"}
                        ]}/>
                    </section>
                    <footer className={"l-home__footer"}>Made with ♥ by @Jouskaio - 2022</footer>
                </main>
                </ApolloProvider>
            </>
        </>

    )
}
