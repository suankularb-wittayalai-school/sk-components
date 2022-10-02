import { DataTable } from "@suankularb-components/react";

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Data Table",
  component: DataTable,
} as ComponentMeta<typeof DataTable>;

const Template: ComponentStory<typeof DataTable> = (args) => (
  <DataTable {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  columns: [
    {
      Header: "First name",
      accessor: "fname",
    },
    {
      Header: "Last name",
      accessor: "lname",
    },
    {
      Header: "Score (full 100)",
      accessor: "score",
    },
  ],
  data: [
    {
      fname: "John",
      lname: "Doe",
      score: 0,
    },
    {
      fname: "Jimmy",
      lname: "Doe",
      score: 100,
    },
    {
      fname: "Corn",
      lname: "Hoe",
      score: 82,
    },
  ],
  globalFilter: "",
};
