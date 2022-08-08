"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAccordionContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AccordionBody_1 = __importDefault(require("./AccordionBody"));
const AccordionHeader_1 = __importDefault(require("./AccordionHeader"));
const AccordionItem_1 = __importDefault(require("./AccordionItem"));
const AccordionContext = (0, react_1.createContext)(null);
const Root = (0, react_1.forwardRef)(({ defaultKey, children, ...props }, ref) => {
    // Polymorphic Component
    const { as: Component } = props;
    const [selected, setSelected] = (0, react_1.useState)(defaultKey);
    const toggle = (0, react_1.useCallback)((value) => {
        setSelected(value || "");
    }, []);
    const value = (0, react_1.useMemo)(() => ({ selected, toggle }), [selected, toggle]);
    return ((0, jsx_runtime_1.jsx)(AccordionContext.Provider, { value: value, children: (0, jsx_runtime_1.jsx)(Component, { ...props, ref: ref, className: "accordion", children: children }) }));
});
function useAccordionContext() {
    const context = (0, react_1.useContext)(AccordionContext);
    if (!context) {
        throw new Error(`Accordion Compound Components cannot be rendered outside the Accordion component`);
    }
    return context;
}
exports.useAccordionContext = useAccordionContext;
const Accordion = Object.assign({}, Root, {
    Header: AccordionHeader_1.default,
    Item: AccordionItem_1.default,
    Body: AccordionBody_1.default,
});
exports.default = Accordion;
