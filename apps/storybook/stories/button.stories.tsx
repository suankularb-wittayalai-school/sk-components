import { Button } from "@suankularb-components/react";

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
  parameters: {
    type: {
      values: [
        { name: "filled", value: "filled" },
        { name: "outlined", value: "outlined" },
        { name: "text", value: "text" },
        { name: "tonal", value: "tonal" },
      ],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} onClick={() => {}} />
);

export const Primary = Template.bind({});

Primary.args = {
  name: "Hello",
  type: "filled",
  label: "Hello",
  icon: "",
  iconOnly: false,
  isDangerous: false,
};
