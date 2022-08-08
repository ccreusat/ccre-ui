import { jsx as _jsx } from "react/jsx-runtime";
import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";
export default function AccordionHeader({ children, ...props }) {
    const { selected, toggle } = useAccordionContext();
    const { itemKey } = useAccordionItemContext();
    return (_jsx("h2", { children: _jsx("button", { onClick: () => toggle(itemKey), className: `accordion-button ${selected === itemKey ? null : "collapsed"}`, type: "button", children: children }) }));
}
