import { FormElement, Range } from "@suankularb-components/react";

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: FormElement,
} as ComponentMeta<typeof FormElement>;

const Template: ComponentStory<typeof FormElement> = (args) => (
  <FormElement label={args.label}>
    <Range {...args} />
  </FormElement>
);

export const Primary = Template.bind({});

Primary.args = {
  name: "length",
  label: "Length",
  min: 1,
  max: 10,
  step: 0.5,
  onChange: (e: number) => console.log(e),
};
