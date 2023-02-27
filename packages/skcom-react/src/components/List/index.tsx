// External libraries
import * as React from "react";

// Internal components
import { Columns, ColumnsProps } from "../Columns";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/list.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link List}.
 */
export interface ListProps extends SKComponent {
  /**
   * List contains Buttons. You can put as many Buttons inside List as
   * needed, but the recommended limit is 3.
   *
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * Uses Columns under the hood. Number of columns.
   *
   * - Must be an integer from 2, 3, 4, 6, or 12.
   * - Optional.
   */
  columns?: ColumnsProps["columns"];

  /**
   * Puts a Divider between List Items.
   *
   * - Optional.
   */
  divided?: boolean;
}

/**
 * A vertical index of texts or images.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.iyg4spbf5pwr SKCom documentation}
 *
 * @param children Items inside the List.
 * @param columns Uses Columns under the hood. Number of columns.
 * @param divided Puts a Divider between List Items.
 */
export function List({
  children,
  columns,
  divided,
  style,
  className,
}: ListProps) {
  return (
    <ul
      style={style}
      className={cn(["skc-list", divided && "skc-list--divided", className])}
    >
      {columns ? <Columns columns={columns}>{children}</Columns> : children}
    </ul>
  );
}

List.displayName = "List";
