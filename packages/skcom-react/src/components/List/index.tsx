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
 * @param children Items inside the List.
 * @param columns Uses Columns under the hood. Number of columns.
 * @param divided Puts a Divider between List Items.
 */
export function List({
  children,
  columns,
  divided,
  element = "ul",
  style,
  className,
}: ListProps) {
  const props = {
    style,
    className: cn(["skc-list", divided && "skc-list--divided", className]),
  };

  return columns ? (
    <Columns columns={columns} element={element} {...props}>
      {children}
    </Columns>
  ) : (
    React.createElement(element, { ...props, role: "list" }, children)
  );
}

List.displayName = "List";
