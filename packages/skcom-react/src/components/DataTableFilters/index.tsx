import "@suankularb-components/css/dist/css/components/data-table-filters.css";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { StylableFC } from "../../types";
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";
import MaterialIcon from "../MaterialIcon";

/**
 * Allows the user to filter the Data Table’s content by selecting from a list
 * of filters.
 *
 * @param children A set of Filter Chips responsible for filtering the Data Table.
 */
const DataTableFilters: StylableFC<{
  /**
   * A set of Filter Chips responsible for filtering the Data Table.
   *
   * - Must be a Chip Set, which must consist of Filter Chips.
   * - Always required.
   */
  children: ReactNode;

  /**
   * This prop is not supported by this component.
   */
  element?: never;
}> = ({ children, style, className }) => {
  const { duration, easing } = useAnimationConfig();

  return (
    <motion.div
      layout
      transition={transition(duration.medium4, easing.standard)}
      style={style}
      className={cn("skc-data-table-filters", className)}
    >
      {/* Icon */}
      <div className="skc-data-table-filters__icon">
        <MaterialIcon icon="filter_list" />
      </div>

      {/* Chip Set */}
      {children}
    </motion.div>
  );
};

DataTableFilters.displayName = "DataTableFilters";

export default DataTableFilters;
