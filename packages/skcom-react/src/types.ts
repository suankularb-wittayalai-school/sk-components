// External libraries
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

// Internal components
import { TableCellProps } from "./components/TableCell";

/**
 * Global attributes for all SK Components.
 */
export interface SKComponent {
  /**
   * `className` on the most relevant underlying attribute.
   */
  className?: string;

  /**
   * `style` on the most relevant underlying attribute.
   */
  style?: React.CSSProperties;
}

export type DataTableColumnDef = ColumnDef<object> &
  Partial<{
    thAttr: TableCellProps;
    tdAttr: TableCellProps;
    render: (row: any) => JSX.Element;
    noDataMsg: string | JSX.Element;
  }>;
