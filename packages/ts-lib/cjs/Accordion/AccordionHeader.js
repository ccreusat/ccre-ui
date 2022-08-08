"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Accordion_1 = require("./Accordion");
const AccordionItem_1 = require("./AccordionItem");
function AccordionHeader({ children, ...props }) {
    const { selected, toggle } = (0, Accordion_1.useAccordionContext)();
    const { itemKey } = (0, AccordionItem_1.useAccordionItemContext)();
    return ((0, jsx_runtime_1.jsx)("h2", { children: (0, jsx_runtime_1.jsx)("button", { onClick: () => toggle(itemKey), className: `accordion-button ${selected === itemKey ? null : "collapsed"}`, type: "button", children: children }) }));
}
exports.default = AccordionHeader;
