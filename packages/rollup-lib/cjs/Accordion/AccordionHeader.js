"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react/jsx-runtime"),t=require("./AccordionContext.js"),o=require("./AccordionItem.js");exports.default=function({children:r,...c}){const{selected:n,toggle:i}=t.useAccordionContext(),{itemKey:s}=o.useAccordionItemContext();return e.jsx("h2",{children:e.jsx("button",{onClick:()=>i(s),className:`accordion-button ${n===s?null:"collapsed"}`,type:"button",children:r})})};
