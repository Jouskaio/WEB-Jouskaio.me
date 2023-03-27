import React from "react";
import {Fragment, useEffect, useState} from 'react'
// @ts-ignore
import {unified} from 'unified'
// @ts-ignore
import rehypeReact from 'rehype-react'
// @ts-ignore
import rehypeParse from "rehype-parse"
import Text from "../../components/atom/text/text";
import TextH3 from "../../components/atom/text/textH3";
import TextH4 from "../../components/atom/text/textH4";
import TextLink from "../../components/atom/text/textLink";
import TextH5 from "../../components/atom/text/textH5";
import Code from "../../components/atom/code/code";
import rehypeFormat from "rehype-format";
import Table from "../../components/molecule/media/table";


function UseProcessor({content}) {
  // @ts-ignore
  const [Content, setContent] = useState(Fragment);
  useEffect( () => {
    unified()
      // PARSER
      // Specifies that we have Markdown text
      .use(rehypeParse, {fragment: true})
      // TRANSFORMERS
      .use(rehypeFormat)
      // COMPILER
      .use(rehypeReact, {
        createElement: React.createElement,
        components: {
          p: Text,
          h1: TextH3,
          h2: TextH3,
          h3: TextH4,
          h4: TextH5,
          a: TextLink,
          code: Code,
          table: (props) => {
            /*
            Exemple HTML code to write :
            <table
              items='[
                {"year": "2023", "name": "portfolio 2023", "link": "#"},
                {"year": "2024", "name": "portfolio 2024", "link": "#"}
              ]'
            />
             */
            const items = JSON.parse(props.items);
            return <Table items={items} />;
          },
        }
      })
      .process(content)
      // OUTPUT
      .then((file) => {
        setContent(file.result)
        console.log(content)
      })
  }, [content])
  return Content
}

export default UseProcessor;