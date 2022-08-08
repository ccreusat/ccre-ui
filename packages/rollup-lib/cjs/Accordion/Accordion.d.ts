/// <reference types="react" />
import Body from "./AccordionBody";
import Header from "./AccordionHeader";
import Item from "./AccordionItem";
import AccordionProps from "./AccordionTypes";
declare const Accordion: import("react").ForwardRefExoticComponent<Pick<AccordionProps<import("react").ElementType<any>>, string | number | symbol> & import("react").RefAttributes<unknown>> & {
    Header: typeof Header;
    Item: typeof Item;
    Body: typeof Body;
};
export default Accordion;
