import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from ".";
import "../../index.css";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Button>;

export const Primary = () => <Button />;
