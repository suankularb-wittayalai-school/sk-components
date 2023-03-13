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

/**
 * An extended version of Tanstack Table’s `ColumnDef`, used to define a column’s proper
 */
export type DataTableColumnDef<T = any> = ColumnDef<T> &
  Partial<{
    thAttr: Partial<TableCellProps>;
    tdAttr: Partial<TableCellProps>;
    render: (row: T) => string | JSX.Element | null;
    noDataMsg: string | JSX.Element;
  }>;
