import "@suankularb-components/css/dist/css/components/table-body.css";
import { ReactNode } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";

/**
 * The body area of a Table.
 *
 * @param children Table Body has the same behaviour as `<tbody>`.
 */
const TableBody: StylableFC<{
  /**
   * Table Body has the same behaviour as `<tbody>`.
   *
   * - Must consist of Table Rows, which must consist of Table Cells.
   * - Always required.
   */
  children: ReactNode;
}> = ({ children, element: Element = "tbody", style, className }) => (
  <Element style={style} className={cn("skc-table-body", className)}>
    {children}
  </Element>
);

TableBody.displayName = "TableBody";

export default TableBody;
