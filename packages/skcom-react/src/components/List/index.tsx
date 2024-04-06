import "@suankularb-components/css/dist/css/components/list.css";
import { ComponentProps, ReactNode } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";
import Columns from "../Columns";

/**
 * A vertical index of texts or images.
 *
 * @param children Items inside the List.
 * @param columns Uses Columns under the hood. Number of columns.
 * @param divided Puts a Divider between List Items.
 */
const List: StylableFC<{
  /**
   * List contains Buttons. You can put as many Buttons inside List as
   * needed, but the recommended limit is 3.
   *
   * - Always required.
   */
  children: ReactNode;

  /**
   * Uses Columns under the hood. Number of columns.
   *
   * - Must be an integer from 2, 3, 4, 6, or 12.
   * - Optional.
   */
  columns?: ComponentProps<typeof Columns>["columns"];

  /**
   * Puts a Divider between List Items.
   *
   * - Optional.
   */
  divided?: boolean;
}> = ({
  children,
  columns,
  divided,
  element: Element = "ul",
  style,
  className,
}) => {
  const props = {
    style,
    className: cn("skc-list", divided && "skc-list--divided", className),
  };

  return columns ? (
    <Columns columns={columns} element={Element} {...props}>
      {children}
    </Columns>
  ) : (
    <Element {...props} role="list">
      {children}
    </Element>
  );
};

List.displayName = "List";

export default List;
