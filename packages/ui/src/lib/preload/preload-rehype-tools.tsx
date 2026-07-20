import {node} from "prop-types";

export const switchListStyle = node => {
  switch (node.attribs.style) {
    case "list-style-type:decimal;":
      return "decimal"
    case "list-style-type:lower-alpha;":
      return "lower-alpha"
    case "list-style-type:lower-roman;":
      return "lower-roman"
    case "list-style-type:upper-alpha;":
      return "upper-alpha"
    case "list-style-type:upper-roman;":
      return "upper-roman"
    case "list-style-type:disc;":
        return "disc"
    case "list-style-type:circle;":
        return "circle"
    case "list-style-type:square;":
        return "square"

    default :
      return "decimal"
  }
};