import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import ReactHtmlParser, { HtmlNode } from "react-html-parser";
import TextDefault from "../../components/atom/text/TextDefault";
import TextH3 from "../../components/atom/text/textH3";
import TextH4 from "../../components/atom/text/textH4";
import TextLink from "../../components/atom/text/textLink";
import TextH5 from "../../components/atom/text/textH5";
import Code from "../../components/atom/code/code";
import Table from "../../components/molecule/media/table";
import TextMarked from "../../components/atom/text/textMarked";
import Swipe from "../../components/molecule/navigation/swipe";
import TextH1 from "../../components/atom/text/textH1";
import TextH2 from "../../components/atom/text/textH2";

function UseProcessor({ content }) {
  /**
   * @param Content: React.FC
   * @see: Every node.name doesn't understand caps, replace it by "-" and lowercase
   * @example: <Swipe/> became <swipe/>
   */
  // @ts-ignore
  const [Content, setContent] = useState(Fragment);

  useEffect(() => {
    setContent(
        ReactHtmlParser(content, {
          decodeEntities: true,
          transform: (node, index) => {
            if (node.name === "p") {
              return <TextDefault key={index}>{node.children[0].data}</TextDefault>;
            } else if (node.name === "h1") {
              return <TextH1 key={index}>{node.children[0].data}</TextH1>;
            } else if (node.name === "h2") {
              return <TextH2 key={index}>{node.children[0].data}</TextH2>;
            } else if (node.name === "h3") {
              return <TextH3 key={index}>{node.children[0].data}</TextH3>;
            } else if (node.name === "h4") {
              return <TextH4 key={index}>{node.children[0].data}</TextH4>;
            } else if (node.name === "h5") {
              return <TextH5 key={index}>{node.children[0].data}</TextH5>;
            } else if (node.name === "a") {
              return (
                  <TextLink key={index} src={node.attribs.href}>
                    {node.children[0].data}
                  </TextLink>
              );
            } else if (node.name === "mark") {
              return <TextMarked key={index}>{node.children[0].data}</TextMarked>;
            } else if (node.name === "code") {
              return <Code key={index}>{node.children[0].data}</Code>;
            } else if (node.name === "table") {
              /**
              * @example:
              * <table
              *   header="['Name', 'Age']"
              *   children="[
              *     ['Alice', 24],
              *     ['Bob', 30]
              *   ]"
              * />
              * */
              const header = JSON.parse(node.attribs.header.replace(/'/g, "\""));
              const children = JSON.parse(node.attribs.children.replace(/'/g, "\""));
              return <Table key={index} header={header}>{children}</Table>;
            } else if (node.name == "swipe") {
              /**
               * @example:
               * <swipe content="Discover"
               * src="/icons/arrow.svg"
               * width=16 height=16
               * classname="l-home__m-swipe"
               * alt="Scroll down"/>
               */
              return <Swipe content={node.attribs.content} key={index} src={node.attribs.src} width={node.attribs.width} height={node.attribs.height} classname={node.attribs.classname} alt={node.attribs.alt}/>
            }
          },
        })
    );
  }, [content]);

  return Content;
}

export default UseProcessor;
