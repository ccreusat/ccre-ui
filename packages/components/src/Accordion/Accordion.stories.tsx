import { ComponentStory, ComponentMeta } from "@storybook/react";

import Accordion from "@ccreusat/ts-lib/Accordion";
import Button from "@ccreusat/ts-lib/Button";
import "../index.css";

export default {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Accordion>;

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

export const BasicAccordion = () => (
  <Accordion as="div" style={{ minWidth: "20rem" }}>
    <Accordion.Item itemKey="1">
      <Accordion.Header>Trigger</Accordion.Header>
      <Accordion.Body>
        <strong>Text</strong>
        <Button />
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
);
export const ClosedAccordion = () => (
  <Accordion as="div" style={{ minWidth: "20rem" }}>
    {data.map(item => {
      return (
        <Accordion.Item key={item.id} itemKey={item.id}>
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body>
            <strong>{item.text}</strong>
          </Accordion.Body>
        </Accordion.Item>
      );
    })}
  </Accordion>
);

export const OpenedAccordion = () => (
  <Accordion defaultKey="1" as="div" style={{ minWidth: "20rem" }}>
    {data.map(item => {
      return (
        <Accordion.Item key={item.id} itemKey={item.id}>
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body>
            <strong>{item.text}</strong>
          </Accordion.Body>
        </Accordion.Item>
      );
    })}
  </Accordion>
);

export const PolymorphicAccordion = () => (
  <Accordion defaultKey="2" as="div" style={{ minWidth: "20rem" }}>
    {data.map(item => {
      return (
        <Accordion.Item key={item.id} itemKey={item.id}>
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body>
            <strong>{item.text}</strong>
          </Accordion.Body>
        </Accordion.Item>
      );
    })}
  </Accordion>
);
