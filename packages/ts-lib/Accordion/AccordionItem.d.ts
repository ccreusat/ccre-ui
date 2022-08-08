import { ReactNode } from "react";
import { AccordionItemContextProps } from "./AccordionTypes";
export default function AccordionItem({ itemKey, children, }: {
    itemKey?: string;
    children: ReactNode;
}): JSX.Element;
export declare function useAccordionItemContext(): AccordionItemContextProps;
