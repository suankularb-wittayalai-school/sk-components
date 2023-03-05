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
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.5lm5awdc1t9l SKCom documentation}
 *
 * @param children Table Body has the same behaviour as `<tfoot>`.
 */
export function TableFoot({ children, style, className }: TableFootProps) {
  return (
    <tfoot style={style} className={cn(["skc-table-body", className])}>
      {children}
    </tfoot>
  );
}

TableFoot.displayName = "TableFoot";
