import{jsx as r}from"react/jsx-runtime";import{createContext as e,useMemo as t,useContext as n}from"react";const o=e(null);function i({itemKey:e,children:n}){const i=t((()=>({itemKey:e})),[e]);return r(o.Provider,{value:i,children:r("div",{className:"accordion-item",children:n})})}function c(){const r=n(o);if(!r)throw new Error("Cannot be rendered without Accordion.Item");return r}export{i as default,c as useAccordionItemContext};
