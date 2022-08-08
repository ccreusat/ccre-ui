import { ReactNode } from "react";
import { PolymorphicComponentPropWithRef } from "../utils/polymorphic";

// Context Interfaces
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

type AccordionProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, { defaultKey: string }>;

export default AccordionProps;
