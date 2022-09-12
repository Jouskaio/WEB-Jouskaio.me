import React from "react";
import {createElement, Fragment, useEffect, useState} from 'react'
// @ts-ignore
import {unified} from 'unified'
// @ts-ignore
import rehypeReact from 'rehype-react'
// @ts-ignore
import remarkParse from "remark-parse";
// @ts-ignore
import remarkRehype from "remark-rehype";
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeParse from 'rehype-parse'
import rehypeStringify from "rehype-stringify";



const UseProcessor = ({content}) => {
  // @ts-ignore
  const [Content, setContent] = useState(Fragment);
  useEffect( () => {
    unified()
      // PARSER
      // Specifies that we have Markdown text
      .use(rehypeParse)//, {fragment: true})
      // TRANSFORMERS
      // COMPILER
      .use(rehypeReact, {createElement, Fragment})
      .process(content)
      // OUTPUT
      .then((file) => {
        setContent(file.result)
      })
  }, [content])
  return Content
}

export default UseProcessor;