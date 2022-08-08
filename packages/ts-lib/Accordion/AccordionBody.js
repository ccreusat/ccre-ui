import { jsx as _jsx } from "react/jsx-runtime";
import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";
export default function AccordionBody({ children, ...props }) {
    const { selected } = useAccordionContext();
    const { itemKey } = useAccordionItemContext();
    return (_jsx("div", { className: `accordion-collapse collapse ${selected === itemKey ? "show" : null}`, children: _jsx("div", { className: "accordion-body", children: children }) }));
}
