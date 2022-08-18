import { createContext, ReactNode, useContext, useMemo } from "react";
import { AccordionItemContextProps } from "./interfaces";

const AccordionItemContext = createContext<AccordionItemContextProps>(null!);

export default function AccordionItem({
  itemKey,
  children,
}: {
  itemKey?: string;
  children: ReactNode;
}) {
  const value = useMemo(() => ({ itemKey }), [itemKey]);

  return (
    <AccordionItemContext.Provider value={value}>
      <div className="accordion-item">{children}</div>
    </AccordionItemContext.Provider>
  );
}

export function useAccordionItemContext() {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error(`Cannot be rendered without Accordion.Item`);
  }
  return context;
}
