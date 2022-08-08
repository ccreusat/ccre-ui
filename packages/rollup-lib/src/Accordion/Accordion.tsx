import { useState, useMemo, useCallback, forwardRef } from "react";
import Body from "./AccordionBody";
import Header from "./AccordionHeader";
import Item from "./AccordionItem";
import { PolymorphicRef } from "../utils/polymorphic";
import AccordionProps from "./AccordionTypes";
import { AccordionContext } from "./AccordionContext";

const Root = forwardRef(
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

const Accordion = Object.assign({}, Root, {
  Header,
  Item,
  Body,
});

export default Accordion;
