// External libraries
import { motion } from "framer-motion";
import * as React from "react";

// Internal components
import { Button } from "../Button";
import { MaterialIcon } from "../MaterialIcon";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/data-table-search.css";

// Utilities
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";

/**
 * Props for {@link DataTableSearch Data Table Search}.
 */
export interface DataTableSearchProps extends SKComponent {
  /**
   * The value inside the search field. This is useful if you want a
   * controlled input.
   *
   * - Optional.
   *
   * @see {@link https://reactjs.org/docs/forms.html#controlled-components React documention on controlled input}
   */
  value?: string;

  /**
   * Allows for translation of the default placeholder message.
   *
   * - Must be `th` or `en-US`, as SKCom currently only support those 2
   *   languages.
   * - Optional.
   */
  locale?: "en-US" | "th";

  /**
   * This function triggers when the user make changes to the field value. The
   * value is passed in via the function.
   *
   * - With {@link https://tanstack.com/table/ Tanstack Table}, this function
   *   can be hooked up to
   *   {@link https://tanstack.com/table/v8/docs/api/features/filters#setglobalfilter setGlobalFitler}.
   *   {@link https://tanstack.com/table/v8/docs/examples/react/filters See an example.}
   * - Optional.
   */
  onChange?: (value: string) => any;

  /**
   * A faint text displayed inside the field guiding the user.
   *
   * - Optional.
   */
  placeholder?: string;

  /**
   * Attributes for the underlying `<input>` element used as the field.
   *
   * - Optional.
   */
  inputAttr?: React.ComponentProps<"input">;
}

/**
 * Allows the user to filter the Data Table’s content using a text query.
 *
 * @param value The value inside the search field. This is useful if you want a controlled input.
 * @param locale Allows for translation of the default placeholder message.
 * @param onChange This function triggers when the user make changes to the field value.
 * @param placeholder A faint text displayed inside the field guiding the user.
 * @param onOverflowToggle Triggers when the overflow icon is clicked. If defined, an overflow icon appears on the right.
 * @param overflow The overflow Menu of the parent Data Table.
 * @param inputAttr Attributes for the underlying `<input>` element used as the field.
 */
export function DataTableSearch({
  value,
  locale,
  onChange,
  placeholder,
  inputAttr,
  element: Element = motion.div,
  style,
  className,
}: DataTableSearchProps) {
  const { duration, easing } = useAnimationConfig();

  return (
    <Element
      layout
      transition={transition(duration.medium4, easing.standard)}
      style={style}
      className={cn(["skc-data-table-search", className])}
    >
      {/* Icon */}
      <div className="skc-data-table-search__icon">
        <MaterialIcon icon="search" />
      </div>

      {/* Search field */}
      <input
        type="search"
        aria-label={locale === "th" ? "ค้นหา" : "Search"}
        className="skc-data-table-search__input"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={placeholder || (locale === "th" ? "ค้นหา" : "Search")}
        {...inputAttr}
      />
    </Element>
  );
}

DataTableSearch.displayName = "DataTableSearch";
