import "@suankularb-components/css/dist/css/components/data-table.css";
import { LayoutProps, motion } from "framer-motion";
import { ReactNode } from "react";
import { StylableFC } from "../../types";
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";

/**
 * A more rich Table with support for filtering, search, and pagination; and
 * integrates directly with Tanstack Table.
 *
 * @param children There is a set of components especially designed to be used here: Data Table Search, Data Table Filters, Data Table Content, and Data Table Pagination.
 */
const DataTable: StylableFC<{
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
  children: ReactNode;

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
}> = ({ children, layout, style, className }) => {
  const { duration, easing } = useAnimationConfig();

  return (
    <motion.figure
      layout={layout}
      transition={transition(duration.medium4, easing.standard)}
      style={{ ...style, borderRadius: 20 }}
      className={cn(`skc-data-table`, className)}
    >
      {children}
    </motion.figure>
  );
};

DataTable.displayName = "DataTable";

export default DataTable;
