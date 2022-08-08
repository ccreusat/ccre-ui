/// <reference types="react" />
import { ComponentMeta } from "@storybook/react";
import "../index.css";
declare const _default: ComponentMeta<import("react").ForwardRefExoticComponent<Pick<import("@ccreusat/ts-lib/Accordion/AccordionTypes").default<import("react").ElementType<any>>, string | number | symbol> & import("react").RefAttributes<unknown>> & {
    Header: typeof import("@ccreusat/ts-lib/Accordion/AccordionHeader").default;
    Item: typeof import("@ccreusat/ts-lib/Accordion/AccordionItem").default;
    Body: typeof import("@ccreusat/ts-lib/Accordion/AccordionBody").default;
}>;
export default _default;
export declare const BasicAccordion: () => JSX.Element;
export declare const ClosedAccordion: () => JSX.Element;
export declare const OpenedAccordion: () => JSX.Element;
export declare const PolymorphicAccordion: () => JSX.Element;
