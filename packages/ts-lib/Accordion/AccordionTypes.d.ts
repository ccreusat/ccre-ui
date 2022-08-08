import { ReactNode } from "react";
import { PolymorphicComponentPropWithRef } from "../utils/polymorphic";
export interface AccordionContextProps {
    selected: string;
    toggle: (value?: string) => void;
}
export interface AccordionItemContextProps {
    itemKey?: string;
}
export interface AccordionHeader {
    children: ReactNode;
}
declare type AccordionProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, {
    defaultKey: string;
}>;
export default AccordionProps;
