// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/table-foot.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link TableFoot Table Foot}.
 */
export interface TableFootProps extends SKComponent {
  /**
   * Table Foot has the same behaviour as `<tfoot>`.
   *
   * - Must consist of Table Rows, which must consist of Table Cells.
   * - Always required.
   */
  children: React.ReactNode;
}

/**
 * The foot area of a Table.
 *
 * @param children Table Foot has the same behaviour as `<tfoot>`.
 */
export function TableFoot({
  children,
  element,
  style,
  className,
}: TableFootProps) {
  return React.createElement(
    element || "tfoot",
    { style, className: cn(["skc-table-foot", className]) },
    children
  );
}

TableFoot.displayName = "TableFoot";
