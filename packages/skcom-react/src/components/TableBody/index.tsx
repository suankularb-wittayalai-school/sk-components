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
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.56t1qg46v0rl SKCom documentation}
 *
 * @param children Table Body has the same behaviour as `<tbody>`.
 */
export function TableBody({ children, style, className }: TableBodyProps) {
  return (
    <tbody style={style} className={cn(["skc-table-body", className])}>
      {children}
    </tbody>
  );
}

TableBody.displayName = "TableBody";
