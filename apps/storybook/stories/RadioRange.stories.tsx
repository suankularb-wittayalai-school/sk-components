import { FormElement, RadioRange } from "@suankularb-components/react";

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Radio Range",
  component: FormElement,
} as ComponentMeta<typeof FormElement>;

const Template: ComponentStory<typeof FormElement> = (args) => (
  <FormElement label={args.label}>
    <RadioRange {...args} />
  </FormElement>
);

export const Primary = Template.bind({});

Primary.args = {
  name: "satisfaction",
  steps: 5,
  minLabel: "Very dissatisfied",
  maxLabel: "Very satisfied",
  onChange: (e: string) => console.log(e),
};
