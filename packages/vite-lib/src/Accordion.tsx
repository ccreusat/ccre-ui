import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  forwardRef,
  ReactNode,
} from "react";
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "./utils/polymorphic";

const AccordionContext = createContext<AccordionContextProps>(null!);
const AccordionItemContext = createContext<AccordionItemContextProps>(null!);

interface AccordionContextProps {
  selected: string;
  toggle: (value?: string) => void;
}

interface AccordionItemContextProps {
  itemKey?: string;
}

type AccordionProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, { defaultKey: string }>;

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

export function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      `Accordion Compound Components cannot be rendered outside the Accordion component`
    );
  }
  return context;
}

function useAccordionItemContext() {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error(`Cannot be rendered without Accordion.Item`);
  }
  return context;
}

function AccordionBody({ children, ...props }: { children: ReactNode }) {
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

function AccordionHeader({ children, ...props }: { children: ReactNode }) {
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

function AccordionItem({
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

const Accordion = Object.assign({}, Root, {
  Header: AccordionHeader,
  Item: AccordionItem,
  Body: AccordionBody,
});

export default Accordion;
