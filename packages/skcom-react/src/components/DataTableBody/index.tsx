// External libraries
import { flexRender, RowModel } from "@tanstack/react-table";
import * as React from "react";

// Internal components
import { TableBody } from "../TableBody";

// Types
import { DataTableColumnDef, SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/table-body.css";
import { TableRow } from "../TableRow";
import { TableCell } from "../TableCell";

/**
 * Props for {@link DataTableBody Data Table Body}.
 */
export interface DataTableBodyProps extends SKComponent {
  /**
   * The return of `getRowModel`, one of the functions of the Tanstack Table
   * instance.
   *
   * - Always required.
   */
  rowModel: RowModel<any>;
}

/**
 * The body section of a Data Table specified via Tanstack Table.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.kfe16c5emou5 SKCom documentation}
 *
 * @param children The return of `getRowModel`, one of the functions of the Tanstack Table instance.
 */
export function DataTableBody({
  rowModel,
  style,
  className,
}: DataTableBodyProps) {
  return (
    <TableBody {...{ style, className }}>
      {rowModel.rows.map((row) => {
        return (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => {
              return (
                <TableCell
                  key={cell.id}
                  align="left"
                  {...(cell.column.columnDef as DataTableColumnDef).tdAttr}
                >
                  {
                    // Check if columnDef provides a custom render function
                    (cell.column.columnDef as DataTableColumnDef).render
                      ? // Use custom render function
                        (
                          (cell.column.columnDef as DataTableColumnDef)
                            .render as Function
                        )(row.original)
                      : // Check if cell is not empty
                      cell.getValue()
                      ? // Render cell normally
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )
                      : // (Cell is empty) Show no data message
                        (cell.column.columnDef as DataTableColumnDef).noDataMsg
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
