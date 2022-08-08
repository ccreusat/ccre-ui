import { createContext, useContext } from "react";
import { AccordionContextProps } from "./AccordionTypes";

export const AccordionContext = createContext<AccordionContextProps>(null!);

export function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      `Accordion Compound Components cannot be rendered outside the Accordion component`
    );
  }
  return context;
}
