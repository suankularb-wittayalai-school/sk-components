// External libraries
import { flexRender, RowModel } from "@tanstack/react-table";
import * as React from "react";

// Internal components
import { TableBody } from "../TableBody";
import { TableCell } from "../TableCell";
import { TableRow } from "../TableRow";

// Types
import { DataTableColumnDef, SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/table-body.css";

/**
 * Props for {@link DataTableBody Data Table Body}.
 */
export interface DataTableBodyProps<RowShape extends {} = any>
  extends SKComponent {
  /**
   * The return of `getRowModel`, one of the functions of the Tanstack Table
   * instance.
   *
   * - Always required.
   */
  rowModel: RowModel<RowShape>;

  /**
   * Actions related to a row, shown on hover.
   *
   * - Must be a Segmented Button or a Button.
   * - Optional.
   *
   * @param row The data for the row this is place in.
   */
  rowActions?: JSX.Element | ((row: RowShape) => JSX.Element);
}

/**
 * The body section of a Data Table specified via Tanstack Table.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.kfe16c5emou5 SKCom documentation}
 *
 * @param children The return of `getRowModel`, one of the functions of the Tanstack Table instance.
 * @param rowActions Actions related to a row, shown on hover.
 */
export function DataTableBody<RowShape extends {} = any>({
  rowModel,
  rowActions,
  style,
  className,
}: DataTableBodyProps) {
  return (
    <TableBody {...{ style, className }}>
      {rowModel.rows.map((row) => {
        return (
          <TableRow
            key={row.id}
            actions={
              typeof rowActions === "function" ? rowActions(row) : rowActions
            }
          >
            {row.getVisibleCells().map((cell) => {
              const columnDef = cell.column.columnDef as DataTableColumnDef;
              return (
                <TableCell
                  key={cell.id}
                  align="left"
                  {...(typeof columnDef.tdAttr === "function"
                    ? columnDef.tdAttr(row.original)
                    : columnDef.tdAttr)}
                >
                  {
                    // Check if columnDef provides a custom render function
                    columnDef.render
                      ? // Use custom render function
                        (columnDef.render as Function)(row.original)
                      : // Check if cell is not empty
                      cell.getValue()
                      ? // Render cell normally
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )
                      : // (Cell is empty) Show no data message
                        columnDef.noDataMsg
                  }
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
}

DataTableBody.displayName = "DataTableBody";
