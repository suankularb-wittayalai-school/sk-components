// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/table-row.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link TableRow Table Row}.
 */
export interface TableRowProps extends SKComponent {
  /**
   * Table Row has the same behaviour as `<tr>`.
   *
   * - Must consist of Table Cells.
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * Actions related to a row, shown on hover.
   *
   * - Must be a Segmented Button or a Button.
   * - Optional.
   */
  actions?: JSX.Element;
}

/**
 * A row of a Table, must be within a table area (Table Head, Table Body, or
 * Table Foot).
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.lxbokeuz0g5q SKCom documentation}
 *
 * @param children Table Row has the same behaviour as `<tr>`.
 * @param actions Actions related to a row, shown on hover.
 */
export function TableRow({
  children,
  actions,
  style,
  className,
}: TableRowProps) {
  return (
    <tr
      tabIndex={actions ? 0 : undefined}
      style={style}
      className={cn(["skc-table-row", className])}
    >
      {/* Table Cells */}
      {children}

      {/* Row ations */}
      {actions && <td className="skc-table-row__actions">{actions}</td>}
    </tr>
  );
}

TableRow.displayName = "TableRow";
