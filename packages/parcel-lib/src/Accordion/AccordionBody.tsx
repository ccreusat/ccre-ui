import { ReactNode } from "react";
import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

export default function AccordionBody({
  children,
  ...props
}: {
  children: ReactNode;
}) {
  const { selected } = useAccordionContext();
  const { itemKey } = useAccordionItemContext();
  return (
    <div
      className={`accordion-collapse collapse ${
        selected === itemKey ? "show" : null
      }`}
    >
      <div className="accordion-body">{children}</div>
    </div>
  );
}
