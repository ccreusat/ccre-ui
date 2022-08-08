"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolymorphicAccordion = exports.OpenedAccordion = exports.ClosedAccordion = exports.BasicAccordion = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Accordion_1 = __importDefault(require("./Accordion"));
require("../index.css");
exports.default = {
    title: "Components/Accordion",
    component: Accordion_1.default,
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
const BasicAccordion = () => ((0, jsx_runtime_1.jsx)(Accordion_1.default, { as: "div", style: { minWidth: "20rem" }, children: (0, jsx_runtime_1.jsxs)(Accordion_1.default.Item, { itemKey: "1", children: [(0, jsx_runtime_1.jsx)(Accordion_1.default.Header, { children: "Trigger" }), (0, jsx_runtime_1.jsx)(Accordion_1.default.Body, { children: (0, jsx_runtime_1.jsx)("strong", { children: "Text" }) })] }) }));
exports.BasicAccordion = BasicAccordion;
const ClosedAccordion = () => ((0, jsx_runtime_1.jsx)(Accordion_1.default, { as: "div", style: { minWidth: "20rem" }, children: data.map(item => {
        return ((0, jsx_runtime_1.jsxs)(Accordion_1.default.Item, { itemKey: item.id, children: [(0, jsx_runtime_1.jsx)(Accordion_1.default.Header, { children: item.title }), (0, jsx_runtime_1.jsx)(Accordion_1.default.Body, { children: (0, jsx_runtime_1.jsx)("strong", { children: item.text }) })] }, item.id));
    }) }));
exports.ClosedAccordion = ClosedAccordion;
const OpenedAccordion = () => ((0, jsx_runtime_1.jsx)(Accordion_1.default, { defaultKey: "1", as: "div", style: { minWidth: "20rem" }, children: data.map(item => {
        return ((0, jsx_runtime_1.jsxs)(Accordion_1.default.Item, { itemKey: item.id, children: [(0, jsx_runtime_1.jsx)(Accordion_1.default.Header, { children: item.title }), (0, jsx_runtime_1.jsx)(Accordion_1.default.Body, { children: (0, jsx_runtime_1.jsx)("strong", { children: item.text }) })] }, item.id));
    }) }));
exports.OpenedAccordion = OpenedAccordion;
const PolymorphicAccordion = () => ((0, jsx_runtime_1.jsx)(Accordion_1.default, { defaultKey: "2", as: "div", style: { minWidth: "20rem" }, children: data.map(item => {
        return ((0, jsx_runtime_1.jsxs)(Accordion_1.default.Item, { itemKey: item.id, children: [(0, jsx_runtime_1.jsx)(Accordion_1.default.Header, { children: item.title }), (0, jsx_runtime_1.jsx)(Accordion_1.default.Body, { children: (0, jsx_runtime_1.jsx)("strong", { children: item.text }) })] }, item.id));
    }) }));
exports.PolymorphicAccordion = PolymorphicAccordion;
