// External libraries
import { flexRender, HeaderGroup } from "@tanstack/react-table";
import * as React from "react";

// Internal components
import { MaterialIcon } from "../MaterialIcon";
import { TableRow } from "../TableRow";
import { TableCell } from "../TableCell";

// Types
import { DataTableColumnDef, SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/table-head.css";

// Utilities
import { TableHead } from "../TableHead";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { transition, useAnimationConfig } from "../../utils/animation";

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
  // TODO: Accessibility label for sorting arrow
  const { duration, easing } = useAnimationConfig();

  return (
    <TableHead {...{ style, className }}>
      {headerGroups.map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            const headerID = `table-header-${header.column.columnDef.header}`;

            return (
              <TableCell
                key={header.id}
                header
                tdAttr={{
                  onClick: header.column.getToggleSortingHandler(),
                  style: header.column.getCanSort()
                    ? { cursor: "pointer" }
                    : undefined,
                }}
                {...(header.column.columnDef as DataTableColumnDef).thAttr}
              >
                <LayoutGroup>
                  <AnimatePresence>
                    {header.column.getIsSorted() && (
                      <motion.div
                        layoutId={`${headerID}-sort-indicator`}
                        initial={{ scale: 0.4, opacity: 0 }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                          rotate:
                            header.column.getIsSorted() === "desc" ? 180 : 0,
                        }}
                        exit={{ scale: 0.4, opacity: 0 }}
                        transition={transition(
                          duration.short4,
                          easing.standard
                        )}
                        className="skc-table-cell__sort-indicator"
                      >
                        <MaterialIcon icon="arrow_upward" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <motion.span
                    layoutId={headerID}
                    transition={transition(duration.short4, easing.standard)}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </motion.span>
                </LayoutGroup>
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </TableHead>
  );
}

DataTableHead.displayName = "TableHead";
