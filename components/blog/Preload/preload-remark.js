import React from "react";
import {createElement, Fragment, useEffect, useState} from 'react'
import {unified} from 'unified'
import rehypeReact from 'rehype-react'
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeParse from 'rehype-parse'
import rehypeStringify from "rehype-stringify";



const UseProcessor = ({content}) => {
  const [Content, setContent] = useState(Fragment);
  useEffect( () => {
    unified()
      // PARSER
      // Specify that we have Markdown text
      .use(rehypeParse, {fragment: true})
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