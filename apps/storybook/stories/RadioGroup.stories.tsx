import { FormElement, RadioGroup } from "@suankularb-components/react";

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Form Element",
  component: FormElement,
  parameters: {},
} as ComponentMeta<typeof FormElement>;

const Template: ComponentStory<typeof FormElement> = (args) => (
  <FormElement label={args.label}>
    <RadioGroup {...args} />
  </FormElement>
);

export const Radio = Template.bind({});

Radio.args = {
  name: "parent-status",
  label: "Parent status",
  options: [
    { id: "together", value: "together", label: "Married and together" },
    { id: "seperate", value: "seperate", label: "Married but seperate" },
    { id: "divorced", value: "divorced", label: "Divorced" },
    { id: "orphan", value: "orphan", label: "Orphan" },
  ],
};

export const Checklist = Template.bind({});

Checklist.args = {
  name: "salad-toppings",
  label: "Salad toppings",
  options: [
    { id: "bread", value: "bread", label: "Bread" },
    { id: "ketchup", value: "ketchup", label: "Ketchup" },
    { id: "mayonnaise", value: "mayonnaise", label: "Mayonnaise" },
  ],
  allowMany: true,
};
