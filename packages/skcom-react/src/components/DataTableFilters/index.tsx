// External libraries
import { motion } from "framer-motion";
import * as React from "react";

// Internal components
import { MaterialIcon } from "../MaterialIcon";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/data-table-filters.css";

// Utilities
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";

/**
 * Props for {@link DataTableFilters Table Body}.
 */
export interface DataTableFiltersProps extends SKComponent {
  /**
   * A set of Filter Chips responsible for filterring the Data Table.
   *
   * - Must be a Chip Set, which must consist of Filter Chips.
   * - Always required.
   */
  children: React.ReactNode;
}

/**
 * Allows the user to filter the Data Table’s content by selecting from a list
 * of filters.
 *
 * @param children A set of Filter Chips responsible for filterring the Data Table.
 */
export function DataTableFilters({
  children,
  element: Element = motion.div,
  style,
  className,
}: DataTableFiltersProps) {
  const { duration, easing } = useAnimationConfig();

  return (
    <Element
      layout
      transition={transition(duration.medium4, easing.standard)}
      style={style}
      className={cn(["skc-data-table-filters", className])}
    >
      {/* Icon */}
      <div className="skc-data-table-filters__icon">
        <MaterialIcon icon="filter_list" />
      </div>

      {/* Chip Set */}
      {children}
    </Element>
  );
}

DataTableFilters.displayName = "DataTableFilters";
