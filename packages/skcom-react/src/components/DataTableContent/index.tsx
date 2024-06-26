// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/data-table-content.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link DataTableContent Data Table Content}.
 */
export interface DataTableContentProps extends SKComponent {
  /**
   * A Data Table Content’s content depends on if you decide to use Tanstack
   * Table or not.
   *
   * - If you opt in to Tanstack Table: must include both Data Table Head and
   *   Data Table Body.
   * - If you opt to use your own table solution: must include both Table Head
   *   and Table Body.
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * The minimum width of the content. When the table’s width is lower than
   * this value, it becomes scrollable. Otherwise, the content fills the width
   * of the Data Table.
   *
   * - Optional.
   */
  contentWidth?: number;
}

/**
 * The main part of a Data Table.
 *
 * @param children A Data Table Content’s content depends on if you decide to use Tanstack Table or not.
 * @param contentWidth The minimum width of the content.
 */
export function DataTableContent({
  children,
  contentWidth,
  element: Element = "div",
  style,
  className,
}: DataTableContentProps) {
  return (
    <Element style={style} className="skc-data-table-content">
      <table
        style={{ ...style, minWidth: contentWidth }}
        className={cn(["skc-data-table-content__content", className])}
      >
        {children}
      </table>
    </Element>
  );
}

DataTableContent.displayName = "DataTableContent";
