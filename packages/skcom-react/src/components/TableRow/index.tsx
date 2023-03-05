// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/table-row.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link TableRow Table Row}.
 */
export interface TableRowProps extends SKComponent {
  /**
   * Table Row has the same behaviour as `<tr>`.
   *
   * - Must consist of Table Cells.
   * - Always required.
   */
  children: React.ReactNode;
}

/**
 * A row of a Table, must be within a table area (Table Head, Table Body, or
 * Table Foot).
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.lxbokeuz0g5q SKCom documentation}
 *
 * @param children Table Row has the same behaviour as `<tr>`.
 */
export function TableRow({ children, style, className }: TableRowProps) {
  return (
    <tr style={style} className={cn(["skc-table-row", className])}>
      {children}
    </tr>
  );
}

TableRow.displayName = "TableRow";
