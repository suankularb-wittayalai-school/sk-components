import "@suankularb-components/css/dist/css/components/table-head.css";
import { ReactNode } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";

/**
 * The head area of a Table.
 *
 * @param children Table Head has the same behaviour as `<thead>`.
 * @param fixed If the Table Head stays put on scroll.
 */
const TableHead: StylableFC<{
  /**
   * Table Head has the same behaviour as `<thead>`.
   *
   * - Must consist of Table Row(s), which must consist of Table Cells with the
   *   `header` enabled.
   * - Always required.
   */
  children: ReactNode;

  /**
   * If the Table Head stays put on scroll.
   *
   * - Table Head will be fixed to the top of the parent Table, not the screen.
   * - Only effective if `height` is set on the parent Table.
   * - Optional.
   */
  fixed?: boolean;
}> = ({ children, fixed, element: Element = "thead", style, className }) => (
  <Element
    style={style}
    className={cn(
      "skc-table-head",
      fixed && "skc-table-head--fixed",
      className,
    )}
  >
    {children}
  </Element>
);

TableHead.displayName = "TableHead";

export default TableHead;
