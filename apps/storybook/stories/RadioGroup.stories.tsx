import { FormElement, RadioGroup } from "@suankularb-components/react";

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Radio Group",
  component: FormElement,
  parameters: {},
} as ComponentMeta<typeof FormElement>;

const Template: ComponentStory<typeof FormElement> = (args) => (
  <FormElement label={args.label}>
    <RadioGroup {...args} />
  </FormElement>
);

export const Primary = Template.bind({});

Primary.args = {
  name: "parent-status",
  label: "Parent status",
  options: [
    { id: "together", value: "together", label: "Married and together" },
    { id: "seperate", value: "seperate", label: "Married but seperate" },
    { id: "divorced", value: "divorced", label: "Divorced" },
    { id: "orphan", value: "orphan", label: "Orphan" },
  ],
  onChange: (e: string) => console.log(e),
};
