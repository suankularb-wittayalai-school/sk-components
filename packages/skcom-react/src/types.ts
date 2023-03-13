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

export type DataTableColumnDef<T> = ColumnDef<T> &
  Partial<{
    thAttr: Partial<TableCellProps>;
    tdAttr: Partial<TableCellProps>;
    render: (row: T) => string | JSX.Element | null;
    noDataMsg: string | JSX.Element;
  }>;
