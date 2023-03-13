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
}

/**
 * The main part of a Data Table.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.7mq6ecmhpn8b SKCom documentation}
 *
 * @param children A Data Table Content’s content depends on if you decide to use Tanstack Table or not.
 */
export function DataTableContent({
  children,
  style,
  className,
}: DataTableContentProps) {
  return (
    <table style={style} className={cn(["skc-data-table-content", className])}>
      {children}
    </table>
  );
}

DataTableContent.displayName = "DataTableContent";
