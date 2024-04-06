import "@suankularb-components/css/dist/css/components/data-table-content.css";
import { ReactNode } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";

/**
 * The main part of a Data Table.
 *
 * @param children A Data Table Content’s content depends on if you decide to use Tanstack Table or not.
 * @param contentWidth The minimum width of the content.
 */
const DataTableContent: StylableFC<{
  /**
   * A Data Table Content’s content depends on if you decide to use Tanstack
   * Table or not.
   *
   * - If you opt in to Tanstack Table: must include both Data Table Head and
   *   Data Table Body.
   * - If you opt to use your own table solution: must include both Table Head
   *   and Table Body.
   * - Always required.
   */
  children: ReactNode;

  /**
   * The minimum width of the content. When the table’s width is lower than
   * this value, it becomes scrollable. Otherwise, the content fills the width
   * of the Data Table.
   *
   * - Optional.
   */
  contentWidth?: number;
}> = ({
  children,
  contentWidth,
  element: Element = "div",
  style,
  className,
}) => (
  <Element style={style} className={cn(`skc-data-table-content`, className)}>
    <table
      style={{ ...style, minWidth: contentWidth }}
      className="skc-data-table-content__content"
    >
      {children}
    </table>
  </Element>
);

DataTableContent.displayName = "DataTableContent";

export default DataTableContent;
