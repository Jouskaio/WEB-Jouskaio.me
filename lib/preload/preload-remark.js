import React from "react";
import {createElement, Fragment, useEffect, useState} from 'react'
// @ts-ignore
import {unified} from 'unified'
// @ts-ignore
import rehypeReact from 'rehype-react'
// @ts-ignore
import rehypeParse from "rehype-parse"
import Text from "../../atom/text/text";
import TextH3 from "../../atom/text/textH3";
import TextH4 from "../../atom/text/textH4";
import TextLink from "../../atom/text/textLink";
import TextH5 from "../../atom/text/textH5";


function UseProcessor({content}) {
  // @ts-ignore
  const [Content, setContent] = useState(Fragment);
  useEffect( () => {
    unified()
      // PARSER
      // Specifies that we have Markdown text
      .use(rehypeParse, {fragment: true})
      // TRANSFORMERS
      .use(rehypeHighlight)
      // COMPILER
      .use(rehypeReact, {
        createElement: React.createElement,
        components: {
          /* TODO: Do not forge to parse JSON.parse(article.oembed)
            to get all embed content from third party sites (Youtube, Vimeo, Tiktok, Soundcloud, ...)*/
          p: Text,
          h1: TextH3,
          h2: TextH3,
          h3: TextH4,
          h4: TextH5,
          a: TextLink,
        }
      })
      .process(content)
      // OUTPUT
      .then((file) => {
        setContent(file.result)
      })
  }, [content])
  return Content
}

export default UseProcessor;