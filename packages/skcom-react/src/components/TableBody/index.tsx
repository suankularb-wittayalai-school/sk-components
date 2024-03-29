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
 * @see {@link https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing#heading=h.56t1qg46v0rl SKCom documentation}
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
