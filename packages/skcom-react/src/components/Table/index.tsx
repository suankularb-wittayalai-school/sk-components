// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/table.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link Table}.
 */
export interface TableProps extends SKComponent {
  /**
   * The content of the Table.
   *
   * - Must include Table Head and Table Body.
   * - Can include Table Foot in addition to the 2 required components.
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * The minimum width of the content. When the Table’s width is lower than
   * this value, it becomes scrollable. Otherwise, the content fills the width
   * of the Table.
   *
   * - Optional.
   */
  contentWidth?: number;

  /**
   * The maximum height of the Table. The Table uses the content’s height until
   * it exceeds this value.
   *
   * - Optional.
   */
  height?: number;
}

/**
 * A Table displays information in columns and rows, each row representing a set
 * of data in each aspect, represented by columns.
 *
 * @param children The content of the Table.
 * @param contentWidth The minimum width of the content.
 * @param height The maximum height of the Table.
 */
export function Table({
  children,
  contentWidth,
  height,
  element,
  style,
  className,
}: TableProps) {
  return React.createElement(
    element || "div",
    {
      style: { ...style, maxHeight: height },
      className: cn(["skc-table", className]),
    },
    <table style={{ minWidth: contentWidth }} className="skc-table__content">
      {children}
    </table>,
  );
}

Table.displayName = "Table";
