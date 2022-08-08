"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAccordionItemContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AccordionItemContext = (0, react_1.createContext)(null);
function AccordionItem({ itemKey, children, }) {
    const value = (0, react_1.useMemo)(() => ({ itemKey }), [itemKey]);
    return ((0, jsx_runtime_1.jsx)(AccordionItemContext.Provider, { value: value, children: (0, jsx_runtime_1.jsx)("div", { className: "accordion-item", children: children }) }));
}
exports.default = AccordionItem;
function useAccordionItemContext() {
    const context = (0, react_1.useContext)(AccordionItemContext);
    if (!context) {
        throw new Error(`Cannot be rendered without Accordion.Item`);
    }
    return context;
}
exports.useAccordionItemContext = useAccordionItemContext;
