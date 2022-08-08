import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useMemo, useCallback, forwardRef, } from "react";
import Body from "./AccordionBody";
import Header from "./AccordionHeader";
import Item from "./AccordionItem";
const AccordionContext = createContext(null);
const Root = forwardRef(({ defaultKey, children, ...props }, ref) => {
    // Polymorphic Component
    const { as: Component } = props;
    const [selected, setSelected] = useState(defaultKey);
    const toggle = useCallback((value) => {
        setSelected(value || "");
    }, []);
    const value = useMemo(() => ({ selected, toggle }), [selected, toggle]);
    return (_jsx(AccordionContext.Provider, { value: value, children: _jsx(Component, { ...props, ref: ref, className: "accordion", children: children }) }));
});
export function useAccordionContext() {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error(`Accordion Compound Components cannot be rendered outside the Accordion component`);
    }
    return context;
}
const Accordion = Object.assign({}, Root, {
    Header,
    Item,
    Body,
});
export default Accordion;
