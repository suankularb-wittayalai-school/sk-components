// External libraries
import { motion } from "framer-motion";
import * as React from "react";

// Internal components
import { Button } from "../Button";
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

  /**
   * Allows for translation of the accessibility labels.
   *
   * - Must be `th` or `en-US`, as SKCom currently only support those 2
   *   languages.
   * - Optional.
   */
  locale?: "en-US" | "th";

  /**
   * Triggers when the overflow icon is clicked. If defined, an overflow icon
   * appears on the right.
   *
   * - Optional.
   */
  onOverflowToggle?: () => any;

  /**
   * The overflow Menu of the parent Data Table. The value of `overflow` is
   * shown on click.
   *
   * - Must be a Menu.
   * - Optional.
   */
  overflow?: JSX.Element;
}

/**
 * Allows the user to filter the Data Table’s content by selecting from a list
 * of filters.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.ujyeoxol3cjz SKCom documentation}
 *
 * @param children A set of Filter Chips responsible for filterring the Data Table.
 * @param locale Allows for translation of the accessibility labels.
 * @param onOverflowToggle Triggers when the overflow icon is clicked.
 * @param overflow The overflow Menu of the parent Data Table.
 */
export function DataTableFilters({
  children,
  locale,
  onOverflowToggle,
  overflow,
  style,
  className,
}: DataTableFiltersProps) {
  const { duration, easing } = useAnimationConfig();

  return (
    <motion.div
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

      {/* Overflow */}
      {onOverflowToggle && (
        <div className="skc-data-table-filters__overflow">
          <Button
            appearance="text"
            icon={<MaterialIcon icon="more_vert" />}
            alt={locale === "th" ? "เปิดเมนูเพิ่มเติม" : "Toggle overflow menu"}
            onClick={onOverflowToggle}
          />
          {overflow}
        </div>
      )}
    </motion.div>
  );
}

DataTableFilters.displayName = "DataTableFilters";
