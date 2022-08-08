import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo } from "react";
const AccordionItemContext = createContext(null);
export default function AccordionItem({ itemKey, children, }) {
    const value = useMemo(() => ({ itemKey }), [itemKey]);
    return (_jsx(AccordionItemContext.Provider, { value: value, children: _jsx("div", { className: "accordion-item", children: children }) }));
}
export function useAccordionItemContext() {
    const context = useContext(AccordionItemContext);
    if (!context) {
        throw new Error(`Cannot be rendered without Accordion.Item`);
    }
    return context;
}
