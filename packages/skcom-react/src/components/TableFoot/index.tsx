import "@suankularb-components/css/dist/css/components/table-foot.css";
import { ReactNode } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";

/**
 * The foot area of a Table.
 *
 * @param children Table Foot has the same behaviour as `<tfoot>`.
 */
const TableFoot: StylableFC<{
  /**
   * Table Foot has the same behaviour as `<tfoot>`.
   *
   * - Must consist of Table Rows, which must consist of Table Cells.
   * - Always required.
   */
  children: ReactNode;
}> = ({ children, element: Element = "tfoot", style, className }) => (
  <Element style={style} className={cn("skc-table-foot", className)}>
    {children}
  </Element>
);

TableFoot.displayName = "TableFoot";

export default TableFoot;
