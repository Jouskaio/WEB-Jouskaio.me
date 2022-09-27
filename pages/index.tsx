// @ts-ignore
import Head from 'next/head'
// @ts-ignore
import Image from 'next/image'
// @ts-ignore
import Link from "next/link";
import React from 'react';
import Code from "../components/atoms/code/code";
import Icon from "../components/atoms/icon/icon";
import Media from "../components/atoms/media/media";

export default function Home() {

    //addLibrary('https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js')

    return (
        <>
            <Head>
                <title>Manon Salsou - Jouskaio's portfolio 2022</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <>
                <Code content="&lt;h1&gt;Hello world&lt;/h1&gt;" language={"html"}/>
                <Media classname={""} height={300} width={300} src={"https://static.pratique.fr/images/unsized/le/les-hiboux-et-les-chouettes-istock-com-carol-gray-209-1549011347.jpg"} alt={""} />
            </>
        </>
    )
}
