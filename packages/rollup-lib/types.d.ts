/// <reference types="react" />
import * as react from 'react';
import { ReactNode } from 'react';

declare function AccordionBody({ children, ...props }: {
    children: ReactNode;
}): JSX.Element;

declare function AccordionHeader({ children, ...props }: {
    children: ReactNode;
}): JSX.Element;

declare type AsProp<C extends React.ElementType> = {
    as?: C;
};
declare type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);
declare type PolymorphicComponentProp<C extends React.ElementType, Props = {}> = React.PropsWithChildren<Props & AsProp<C>> & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;
declare type PolymorphicComponentPropWithRef<C extends React.ElementType, Props = {}> = PolymorphicComponentProp<C, Props> & {
    ref?: PolymorphicRef<C>;
};
declare type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>["ref"];

declare type AccordionProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, {
    defaultKey: string;
}>;

declare function AccordionItem({ itemKey, children, }: {
    itemKey?: string;
    children: ReactNode;
}): JSX.Element;

declare const Accordion: react.ForwardRefExoticComponent<Pick<AccordionProps<react.ElementType<any>>, string | number | symbol> & react.RefAttributes<unknown>> & {
    Header: typeof AccordionHeader;
    Item: typeof AccordionItem;
    Body: typeof AccordionBody;
};

interface ButtonProps {
    children?: ReactNode;
}

declare const Button: ({ children }: ButtonProps) => JSX.Element;

export { Accordion, Button, ButtonProps };
