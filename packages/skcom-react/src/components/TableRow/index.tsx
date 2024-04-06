import "@suankularb-components/css/dist/css/components/table-row.css";
import { Children, ComponentProps, ReactNode } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";
import { matchDisplayName } from "../../utils/displayName";
import TableCell from "../TableCell";

/**
 * A row of a Table, must be within a table area (Table Head, Table Body, or
 * Table Foot).
 *
 * @param children Table Row has the same behaviour as `<tr>`.
 * @param actions Actions related to a row, shown on hover.
 */
const TableRow: StylableFC<{
  /**
   * Table Row has the same behaviour as `<tr>`.
   *
   * - Must consist of Table Cells.
   * - Always required.
   */
  children: ReactNode;

  /**
   * Actions related to a row, shown on hover.
   *
   * - Must be a Segmented Button or a Button.
   * - Optional.
   */
  actions?: JSX.Element;
}> = ({ children, actions, element: Element = "tr", style, className }) => (
  <Element style={style} className={cn("skc-table-row", className)}>
    {actions
      ? // Inject row actions into the first Table Cell
        Children.map(children, (child, idx) =>
          idx === 0 && matchDisplayName(child, "TableCell") ? (
            <TableCell {...(child as JSX.Element).props}>
              {
                (
                  (child as JSX.Element).props as ComponentProps<
                    typeof TableCell
                  >
                ).children
              }
              <div className="skc-table-row__actions">{actions}</div>
            </TableCell>
          ) : (
            child
          ),
        )
      : children}
  </Element>
);

TableRow.displayName = "TableRow";

export default TableRow;
