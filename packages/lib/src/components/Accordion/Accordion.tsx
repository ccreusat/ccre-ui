import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  forwardRef,
} from "react";
import { PolymorphicRef } from "utils/polymorphic";
import AccordionBody from "./AccordionBody";
import AccordionHeader from "./AccordionHeader";
import AccordionItem from "./AccordionItem";
import AccordionProps, { AccordionContextProps } from "./interfaces";

const AccordionContext = createContext<AccordionContextProps>(null!);

export const Root = forwardRef(
  <C extends React.ElementType = "div">(
    { defaultKey, children, ...props }: AccordionProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    // Polymorphic Component
    const { as: Component } = props;

    const [selected, setSelected] = useState<string>(defaultKey);

    const toggle = useCallback((value?: string) => {
      setSelected(value || "");
    }, []);

    const value = useMemo(() => ({ selected, toggle }), [selected, toggle]);

    return (
      <AccordionContext.Provider value={value}>
        <Component {...props} ref={ref} className="accordion">
          {children}
        </Component>
      </AccordionContext.Provider>
    );
  }
);

export function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      `Accordion Compound Components cannot be rendered outside the Accordion component`
    );
  }
  return context;
}

const Accordion = Object.assign({}, Root, {
  Trigger: AccordionHeader,
  Item: AccordionItem,
  Body: AccordionBody,
});

export default Accordion;
