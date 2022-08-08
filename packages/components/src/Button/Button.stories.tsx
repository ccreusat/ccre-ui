import { ComponentMeta } from "@storybook/react";

import Button from "@ccreusat/rollup-lib/Button";
import "../index.css";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Button>;

export const Primary = () => <Button />;
