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
 * @see {@link https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing#heading=h.5lm5awdc1t9l SKCom documentation}
 *
 * @param children Table Foot has the same behaviour as `<tfoot>`.
 */
export function TableFoot({ children, element, style, className }: TableFootProps) {
  return React.createElement(
    element || "tfoot",
    { style, className: cn(["skc-table-foot", className]) },
    children
  );
}

TableFoot.displayName = "TableFoot";
