// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/table-body.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link TableBody Table Body}.
 */
export interface TableBodyProps extends SKComponent {
  /**
   * Table Body has the same behaviour as `<tbody>`.
   *
   * - Must consist of Table Rows, which must consist of Table Cells.
   * - Always required.
   */
  children: React.ReactNode;
}

/**
 * The body area of a Table.
 *
 * @param children Table Body has the same behaviour as `<tbody>`.
 */
export function TableBody({
  children,
  element,
  style,
  className,
}: TableBodyProps) {
  return React.createElement(
    element || "tbody",
    { style, className: cn(["skc-table-body", className]) },
    children
  );
}

TableBody.displayName = "TableBody";
