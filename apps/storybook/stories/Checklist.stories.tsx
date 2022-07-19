import { FormElement, Checklist } from "@suankularb-components/react";

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: FormElement,
} as ComponentMeta<typeof FormElement>;

const Template: ComponentStory<typeof FormElement> = (args) => (
  <FormElement label={args.label}>
    <Checklist {...args} />
  </FormElement>
);

export const Primary = Template.bind({});

Primary.args = {
  name: "salad-toppings",
  label: "Salad toppings",
  options: [
    { id: "bread", value: "bread", label: "Bread" },
    { id: "ketchup", value: "ketchup", label: "Ketchup" },
    { id: "mayonnaise", value: "mayonnaise", label: "Mayonnaise" },
  ],
  onChange: (e: string) => console.log(e),
};
