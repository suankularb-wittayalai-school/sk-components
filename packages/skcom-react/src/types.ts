// External libraries
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

// Internal components
import { TableCell, TableCellProps } from "./components/TableCell";

/**
 * Global attributes for all SK Components.
 */
export interface SKComponent {
  /**
   * The element of the most relevant underlying element.
   *
   * - Optional.
   */
  element?: keyof React.ReactHTML | React.FunctionComponent<any>;

  /**
   * `className` on the most relevant underlying attribute.
   *
   * - Optional.
   */
  className?: string;

  /**
   * `style` on the most relevant underlying attribute.
   *
   * - Optional.
   */
  style?: React.CSSProperties;
}

/**
 * An extended version of Tanstack Table’s `ColumnDef`, used to define a
 * column’s properties.
 */
export type DataTableColumnDef<T = any> = ColumnDef<T> &
  Partial<{
    /**
     * Props for the header Table Cell.
     *
     * @see {@link TableCell}
     */
    thAttr: Partial<TableCellProps>;

    /**
     * Props for the content Table Cell.
     *
     * @see {@link TableCell}
     */
    tdAttr: Partial<TableCellProps> | ((row: T) => Partial<TableCellProps>);

    /**
     * A custom render function.
     *
     * @param row The data passed in for each row.
     * @returns The Table Cell content, replaces the default.
     */
    render: (row: T) => string | JSX.Element | null;

    /**
     * The render function used when a cell in this column is being edited.
     * Enables editing if defined.
     *
     * @param row The data passed in for each row.
     * @returns A JSX Element, usually a Text Field or a Chip Field.
     *
     * @todo
     */
    editingField?: (row: T) => JSX.Element;

    /**
     * Triggers when the user is don editing a cell in this column.
     *
     * @param value
     *
     * @todo
     */
    onSubmitEdit?: (value: any) => any;

    /**
     * The message shown when there is no data for a Table Cell.
     */
    noDataMsg: string | JSX.Element;
  }>;

export type AdaptToMotionProps<T extends object> = Omit<
  T,
  "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag" | "ref"
>;
