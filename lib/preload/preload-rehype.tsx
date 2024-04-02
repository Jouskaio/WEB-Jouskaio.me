import React, { useState, useEffect, Fragment } from "react";
import ReactHtmlParser from "react-html-parser";
import TextDefault from "../../components/atom/text/TextDefault";
import TextH3 from "../../components/atom/text/textH3";
import TextH4 from "../../components/atom/text/textH4";
import TextLink from "../../components/atom/text/textLink";
import TextH5 from "../../components/atom/text/textH5";
import Code from "../../components/atom/code/code";
import TextMarked from "../../components/atom/text/textMarked";
import TextH1 from "../../components/atom/text/textH1";
import TextH2 from "../../components/atom/text/textH2";
import {getStrapiMedia} from "../api/api";
import {shimmer, toBase64} from "./preload-image";
import {switchListStyle} from "./preload-rehype-tools";

function UseProcessor({ content, size }) {
  const [contentElements, setContentElements] = useState([]);
  function preloadListProcessor(child, i) {
        if (child.name == "li") {
            return (
                <li key={i}>{child.children.map((subChild, j) => {
                    if (subChild.type === "text") {
                        return <span key={j}>{subChild.data}</span>;
                    } else if (subChild.name === "code") {
                        return <Code key={j}>{subChild.children[0].data}</Code>;
                    } else if (subChild.name === "p") {
                        return <p key={j}>{subChild.children[0].data}</p>;
                    }
                })}</li>
            );
        }
    }

// Render the content
useEffect(() => {
    const parsedContent = ReactHtmlParser(content, {
      decodeEntities: true,
      transform: (node, index) => {
        //console.log(node)
        if (node.type === "text") {
          return <TextDefault key={index}>{node.data}</TextDefault>;
        } else if (node.name === "h1") {
          return <TextH1 key={index} classname={"o-processor__a-textH1"}>{node.children[0].data}</TextH1>;
        } else if (node.name === "h2") {
          return <TextH2 key={index} classname={"o-processor__a-textH2"}>{node.children[0].data}</TextH2>;
        } else if (node.name === "h3") {
          return <TextH3 key={index} classname={"o-processor__a-textH3"}>{node.children[0].data}</TextH3>;
        } else if (node.name === "h4") {
          return <TextH4 key={index} classname={"o-processor__a-textH4"}>{node.children[0].data}</TextH4>;
        } else if (node.name === "h5") {
          return <TextH5 key={index} classname={"o-processor__a-textH5"}>{node.children[0].data}</TextH5>;
        } else if (node.name === "mark") {
          return <TextMarked key={index}>{node.children[0].data}</TextMarked>;
        } else if (node.name === "code") {
          return <nav style={{maxWidth: size.width - 32}} key={index}>
                <Code classname={"o-processor__a-code"}>{node.children[0].data}</Code>
              </nav>
        } else if (node.name == "img") {
          return (
              <nav className={"o-processor__a-image"} key={index}>
                <img
                    src={getStrapiMedia(node.attribs.src)}
                    placeholder="blur"
                    onLoad={() => `data:image/svg+xml;base64,${toBase64(shimmer("100%", "100%"))}`}
                    alt={"Illustration"}
                    className={""}
                />
              </nav>
          )
        } else if (node.name === "table") {
          return <nav style={{maxWidth: size.width, overflowX: "auto"}} key={index}>
                <table className={"m-table"}>
                  {node.children.map((child, i) => {
                    if (child.name === "thead") {
                      return (
                          <thead key={i}>
                          {child.children.map((child, i) => {
                            if (child.name === "tr") {
                              return (
                                  <tr key={i}>
                                    {child.children.map((child, i) => {
                                      if (child.name === "th") {
                                        return <th key={i}>{child.children[0].data}</th>;
                                      }
                                    })}
                                  </tr>
                              );
                            }
                          })}
                          </thead>
                      );
                    } else if (child.name === "tbody") {
                      return (
                          <tbody key={i}>
                          {child.children.map((child, i) => {
                            if (child.name === "tr") {
                              return (
                                  <tr key={i}>
                                    {child.children.map((child, i) => {
                                      if (child.name === "td") {
                                        return <td key={i}>{child.children[0].data}</td>;
                                      }
                                    })}
                                  </tr>
                              );
                            }
                          })}
                          </tbody>
                      );
                    }
                  })}
                </table>
              </nav>
        } else if (node.name == "ol") {
          return (
              <ol className={"o-processor__m-list"} style={{listStyleType: switchListStyle(node)}}>
                {node.children.map(preloadListProcessor)}
              </ol>
          )
        } else if (node.name == "ul") {
          return (
              <ul key={index} className={"o-processor__m-list--ul o-processor__m-list"}>
                  {node.children.map(preloadListProcessor)}
              </ul>
          )
        } else if(node.name === "blockquote") {
          return (
              <blockquote key={index} className={"o-processor__m-citation"}>
                <span className={"o-processor__m-citation--span"}>"<br/></span>
                {node.children.map((child, i) => {
                  return <TextDefault classname={"o-processor__m-citation--content"} key={i}>{child.children[0].data}<br/></TextDefault>;
                })}
                <span className={"o-processor__m-citation--span o-processor__m-citation--spanLast"}>"<br/></span>
              </blockquote>
          )
        }
      }
    });

    setContentElements(parsedContent);
  }, [content, size]);

  return <Fragment>{contentElements}</Fragment>;
}

export default UseProcessor;
