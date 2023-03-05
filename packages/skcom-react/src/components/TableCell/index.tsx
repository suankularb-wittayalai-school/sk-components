// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/table-body.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link TableCell Table Body}.
 */
export interface TableCellProps extends SKComponent {
  /**
   * The content of the cell.
   *
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * If the cell is a header cell, Table Cell will use `<th>` instead of `<td>`.
   *
   * - Optional.
   */
  header?: boolean;

  /**
   * How the Buttons should be positioned. It can be aligned to the left, the
   * center (default), or the right.
   *
   * - Must be `left`, `center`, `right`.
   * - Optional.
   */
  align?: "left" | "center" | "right";

  /**
   * An inline menu. This is useful for editable tables.
   *
   * - Optional.
   */
  menu?: JSX.Element;

  /**
   * Triggers on click if defined.
   * - If this is defined, a dropdown button appears.
   * - Optional.
   */
  onMenuToggle?: () => any;

  /**
   * Attributes for the underlying `<td>` element.
   *
   * - Optional.
   */
  tdAttr?: JSX.IntrinsicElements["td"];
}

/**
 * A cell of a Table.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.l8x24yc18c9b SKCom documentation}
 *
 * @param children The content of the cell.
 * @param header If the cell is a header cell, Table Cell will use `<th>` instead of `<td>`.
 * @param align How the Buttons should be positioned. It can be aligned to the left, the center (default), or the right.
 * @param menu An inline menu. This is useful for editable tables.
 * @param onMenuToggle Triggers on click if defined.
 * @param tdAttr Attributes for the underlying `<td>` element.
 */
export function TableCell({
  children,
  header,
  align,
  menu,
  onMenuToggle,
  tdAttr,
  style,
  className,
}: TableCellProps) {
  const props = {
    style,
    className: cn(["skc-table-body", className]),
  } satisfies JSX.IntrinsicElements["td" | "th"];

  const content = children;

  return header ? <th {...props}>{content}</th> : <td {...props}>{content}</td>;
}

TableCell.displayName = "TableCell";
