"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react/jsx-runtime"),t=require("react");const r=t.createContext(null);exports.default=function({itemKey:n,children:o}){const c=t.useMemo((()=>({itemKey:n})),[n]);return e.jsx(r.Provider,{value:c,children:e.jsx("div",{className:"accordion-item",children:o})})},exports.useAccordionItemContext=function(){const e=t.useContext(r);if(!e)throw new Error("Cannot be rendered without Accordion.Item");return e};
