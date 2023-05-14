// External libraries
import { LayoutProps, motion } from "framer-motion";
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/data-table.css";

// Utilities
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";

/**
 * Props for {@link DataTable Data Table}.
 */
export interface DataTableProps extends SKComponent {
  /**
   * There is a set of components especially designed to be used here: Data
   * Table Search, Data Table Filters, Data Table Content, and Data Table
   * Pagination.
   *
   * - A Data Table cannot have both Data Table Search and Data Table Filters.
   * - A Data Table must have a Data Table Content.
   * - If present, Data Table Search/Data Table Filters must be the first
   *   component.
   * - If present, Data Table Pagination must be the last component.
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * Configuration for
   * {@link https://www.framer.com/motion/layout-animations/ layout animation with Framer Motion}.
   *
   * - Must be `true`, `position`, `size`, or `preserve-aspect`.
   * - Optional.
   */
  layout?: LayoutProps["layout"];

  /**
   * This prop is not supported by this component.
   */
  element?: never;
}

/**
 * A more rich Table with support for filtering, search, and pagination; and
 * integrates directly with Tanstack Table.
 *
 * @see {@link https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing#heading=h.cfjy3gpzsh75 SKCom documentation}
 *
 * @param children There is a set of components especially designed to be used here: Data Table Search, Data Table Filters, Data Table Content, and Data Table Pagination.
 */
export function DataTable({
  children,
  layout,
  style,
  className,
}: DataTableProps) {
  const { duration, easing } = useAnimationConfig();

  return (
    <motion.figure
      layout={layout}
      transition={transition(duration.medium4, easing.standard)}
      style={{ ...style, borderRadius: 20 }}
      className={cn(["skc-data-table", className])}
    >
      {children}
    </motion.figure>
  );
}

DataTable.displayName = "DataTable";
