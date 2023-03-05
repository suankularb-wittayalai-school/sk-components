// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/actions.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link Table}.
 */
export interface TableProps extends SKComponent {
  /**
   * The content of the Table.
   *
   * - Must include Table Head and Table Body.
   * - Can include Table Foot in addition to the 2 required components.
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * The minimum width of the content. When the Table’s width is lower than
   * this value, it becomes scrollable. Otherwise, the content fills the width
   * of the Table.
   *
   * - Optional.
   */
  contentWidth?: number;

  /**
   * The maximum height of the Table. The Table uses the content’s height until
   * it exceeds this value.
   *
   * - Optional.
   */
  height?: number;
}

/**
 * A row of Buttons. Table handles spacing and overflow.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.3ypdzg62wg53 SKCom documentation}
 *
 * @param children The content of the Table.
 * @param contentWidth The minimum width of the content.
 * @param height The maximum height of the Table.
 */
export function Table({
  children,
  contentWidth,
  height,
  style,
  className,
}: TableProps) {
  return (
    <div
      style={{ ...style, maxHeight: height }}
      className={cn(["skc-table", className])}
    >
      <table style={{ minWidth: contentWidth }} className="skc-table__content">
        {children}
      </table>
    </div>
  );
}

Table.displayName = "Table";
