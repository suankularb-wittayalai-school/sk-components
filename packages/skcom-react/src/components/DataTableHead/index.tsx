// External libraries
import { flexRender, HeaderGroup } from "@tanstack/react-table";
import * as React from "react";

// Internal components
import { TableRow } from "../TableRow";
import { TableCell } from "../TableCell";

// Types
import { DataTableColumnDef, SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/table-head.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link DataTableHead Table Head}.
 */
export interface DataTableHeadProps extends SKComponent {
  headerGroups: HeaderGroup<any>[];
  locale?: "en-US" | "th";
}

/**
 * The head area of a Table.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.7y7xcyou1za9 SKCom documentation}
 *
 * @param headerGroups
 * @param locale
 */
export function DataTableHead({
  headerGroups,
  locale,
  style,
  className,
}: DataTableHeadProps) {
  return (
    <thead style={style} className={cn(["skc-table-head", className])}>
      {headerGroups.map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableCell
              key={header.id}
              header
              {...(header.column.columnDef as DataTableColumnDef).thAttr}
            >
              {flexRender(header.column.columnDef.header, header.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </thead>
  );
}

DataTableHead.displayName = "TableHead";
