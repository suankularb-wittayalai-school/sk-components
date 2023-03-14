// External libraries
import { flexRender, HeaderGroup } from "@tanstack/react-table";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import * as React from "react";

// Internal components
import { MaterialIcon } from "../MaterialIcon";
import { TableRow } from "../TableRow";

// Types
import { DataTableColumnDef, SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/table-head.css";

// Utilities
import {
  transition,
  useAnimationConfig,
  useRipple,
} from "../../utils/animation";
import { cn } from "../../utils/className";

/**
 * Props for {@link DataTableHead Table Head}.
 */
export interface DataTableHeadProps extends SKComponent {
  /**
   * The return of `getHeaderGroups`, one of the functions of the Tanstack Table instance.
   *
   * - Always required.
   */
  headerGroups: HeaderGroup<any>[];

  /**
   * Allows for translation of the accessibility labels.
   *
   * - Must be `th` or `en-US`, as SKCom currently only support those 2 languages.
   * - Optional.
   */
  locale?: "en-US" | "th";
}

/**
 * The head area of a Table.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.7y7xcyou1za9 SKCom documentation}
 *
 * @param headerGroups The return of `getHeaderGroups`, one of the functions of the Tanstack Table instance.
 * @param locale Allows for translation of the accessibility labels.
 */
export function DataTableHead({
  headerGroups,
  locale,
  style,
  className,
}: DataTableHeadProps) {
  const { duration, easing } = useAnimationConfig();

  return (
    <motion.thead
      layout
      transition={transition(duration.medium4, easing.standard)}
      style={style}
      className={cn(["skc-table-head", className])}
    >
      {/* For each Header Group, render a Table Row */}
      {headerGroups.map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {/* For each Header, define a header Table Cell */}
          {headerGroup.headers.map((header) => {
            const columnDef = header.column.columnDef as DataTableColumnDef;

            // Ripple setup
            const toggleRef = React.useRef(null);
            const { rippleListeners, rippleControls, rippleStyle } =
              useRipple(toggleRef);

            // Base ID for sorting animation
            const headerID = `table-header-${header.column.columnDef.header}`;

            return (
              <th
                key={header.id}
                ref={toggleRef}
                // Additional attributes passed in via column
                {...columnDef.thAttr}
                className={cn([
                  "skc-table-cell",
                  "skc-table-cell--header",
                  header.column.getCanSort() && "skc-table-cell--sortable",
                  columnDef.thAttr?.className,
                ])}
                title={
                  header.column.getCanSort()
                    ? locale === "th"
                      ? "คลิกเพื่อเรียง"
                      : "Click to toggle sort"
                    : undefined
                }
                // Sort the column on click
                onClick={header.column.getToggleSortingHandler()}
                onKeyUp={(event) => {
                  if (!["Enter", " "].includes(event.key)) return;
                  event.preventDefault();
                  const sortingHandler =
                    header.column.getToggleSortingHandler();
                  if (sortingHandler) sortingHandler(event);
                }}
                // Enable tabbing-in
                tabIndex={0}
                // Listeners for activating the ripple effect
                {...rippleListeners}
              >
                <div aria-atomic className="skc-table-cell__content">
                  <LayoutGroup>
                    <AnimatePresence>
                      {/* Sorting indicator */}
                      {header.column.getIsSorted() && (
                        <motion.div
                          layoutId={`${headerID}-sort-indicator`}
                          initial={{ scale: 0.4, opacity: 0 }}
                          animate={{
                            scale: 1,
                            rotate:
                              header.column.getIsSorted() === "desc" ? 180 : 0,
                            opacity: 1,
                          }}
                          exit={{ scale: 0.4, opacity: 0 }}
                          transition={transition(
                            duration.short4,
                            easing.standard
                          )}
                          aria-label={
                            locale === "th"
                              ? `คอลัมน์ที่เรียง ${
                                  header.column.getIsSorted() === "asc"
                                    ? "จากน้อยไปมาก"
                                    : "จากน้อยไปน้อย"
                                }`
                              : `Sorted column, ${
                                  header.column.getIsSorted() === "asc"
                                    ? "ascending"
                                    : "descending"
                                };`
                          }
                          className="skc-table-cell__sort-indicator"
                        >
                          <MaterialIcon icon="arrow_downward" />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Header cell content */}
                    <motion.span
                      layoutId={headerID}
                      layout="position"
                      transition={transition(duration.short4, easing.standard)}
                    >
                      {flexRender(columnDef.header, header.getContext())}
                    </motion.span>
                  </LayoutGroup>
                </div>

                {/* Ripple */}
                <motion.span
                  aria-hidden
                  initial={{ scale: 0, opacity: 0.36 }}
                  animate={rippleControls}
                  className="skc-table-cell__ripple"
                  style={rippleStyle}
                />
              </th>
            );
          })}
        </TableRow>
      ))}
    </motion.thead>
  );
}

DataTableHead.displayName = "TableHead";
