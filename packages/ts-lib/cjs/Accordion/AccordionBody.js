"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Accordion_1 = require("./Accordion");
const AccordionItem_1 = require("./AccordionItem");
function AccordionBody({ children, ...props }) {
    const { selected } = (0, Accordion_1.useAccordionContext)();
    const { itemKey } = (0, AccordionItem_1.useAccordionItemContext)();
    return ((0, jsx_runtime_1.jsx)("div", { className: `accordion-collapse collapse ${selected === itemKey ? "show" : null}`, children: (0, jsx_runtime_1.jsx)("div", { className: "accordion-body", children: children }) }));
}
exports.default = AccordionBody;
