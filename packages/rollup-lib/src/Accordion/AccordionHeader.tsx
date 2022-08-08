import { ReactNode } from "react";
import { useAccordionContext } from "./AccordionContext";
import { useAccordionItemContext } from "./AccordionItem";

export default function AccordionHeader({
  children,
  ...props
}: {
  children: ReactNode;
}) {
  const { selected, toggle } = useAccordionContext();
  const { itemKey } = useAccordionItemContext();
  return (
    <h2>
      <button
        onClick={() => toggle(itemKey)}
        className={`accordion-button ${
          selected === itemKey ? null : "collapsed"
        }`}
        type="button"
      >
        {children}
      </button>
    </h2>
  );
}
