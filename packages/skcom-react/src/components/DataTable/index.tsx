// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/data-table.css";

// Utilities
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
}

/**
 * A more rich Table with support for filtering, search, and pagination; and
 * integrates directly with Tanstack Table.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.cfjy3gpzsh75 SKCom documentation}
 *
 * @param children There is a set of components especially designed to be used here: Data Table Search, Data Table Filters, Data Table Content, and Data Table Pagination.
 */
export function DataTable({ children, style, className }: DataTableProps) {
  return (
    <figure style={style} className={cn(["skc-data-table", className])}>
      {children}
    </figure>
  );
}

DataTable.displayName = "DataTable";
