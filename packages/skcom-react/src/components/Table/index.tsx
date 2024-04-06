import "@suankularb-components/css/dist/css/components/table.css";
import { ReactNode } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";

/**
 * A Table is used to display data in a tabular format. It should be made up of
 * Table Head, Table Body, and Table Foot.
 *
 * @param children The content of the Table.
 * @param contentWidth The minimum width of the content.
 * @param height The maximum height of the Table.
 */
const Table: StylableFC<{
  /**
   * The content of the Table.
   *
   * - Must include Table Head and Table Body.
   * - Can include Table Foot in addition to the 2 required components.
   * - Always required.
   */
  children: ReactNode;

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
}> = ({
  children,
  contentWidth,
  height,
  element: Element = "div",
  style,
  className,
}) => (
  <Element
    style={{ ...style, maxHeight: height }}
    className={cn("skc-table", className)}
  >
    <table style={{ minWidth: contentWidth }} className="skc-table__content">
      {children}
    </table>
  </Element>
);

Table.displayName = "Table";

export default Table;
