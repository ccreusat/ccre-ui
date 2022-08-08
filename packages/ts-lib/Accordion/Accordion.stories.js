import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Accordion from "./Accordion";
import "../index.css";
export default {
    title: "Components/Accordion",
    component: Accordion,
    parameters: {
        layout: "centered",
    },
};
const data = [
    {
        id: "1",
        title: "Accordion Item #1",
        text: "This is the first item's accordion body.",
    },
    {
        id: "2",
        title: "Accordion Item #2",
        text: "This is the second item's accordion body.",
    },
    {
        id: "3",
        title: "Accordion Item #3",
        text: "This is the third item's accordion body.",
    },
];
export const BasicAccordion = () => (_jsx(Accordion, { as: "div", style: { minWidth: "20rem" }, children: _jsxs(Accordion.Item, { itemKey: "1", children: [_jsx(Accordion.Header, { children: "Trigger" }), _jsx(Accordion.Body, { children: _jsx("strong", { children: "Text" }) })] }) }));
export const ClosedAccordion = () => (_jsx(Accordion, { as: "div", style: { minWidth: "20rem" }, children: data.map(item => {
        return (_jsxs(Accordion.Item, { itemKey: item.id, children: [_jsx(Accordion.Header, { children: item.title }), _jsx(Accordion.Body, { children: _jsx("strong", { children: item.text }) })] }, item.id));
    }) }));
export const OpenedAccordion = () => (_jsx(Accordion, { defaultKey: "1", as: "div", style: { minWidth: "20rem" }, children: data.map(item => {
        return (_jsxs(Accordion.Item, { itemKey: item.id, children: [_jsx(Accordion.Header, { children: item.title }), _jsx(Accordion.Body, { children: _jsx("strong", { children: item.text }) })] }, item.id));
    }) }));
export const PolymorphicAccordion = () => (_jsx(Accordion, { defaultKey: "2", as: "div", style: { minWidth: "20rem" }, children: data.map(item => {
        return (_jsxs(Accordion.Item, { itemKey: item.id, children: [_jsx(Accordion.Header, { children: item.title }), _jsx(Accordion.Body, { children: _jsx("strong", { children: item.text }) })] }, item.id));
    }) }));
