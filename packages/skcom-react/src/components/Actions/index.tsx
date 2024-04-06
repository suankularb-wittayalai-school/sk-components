import "@suankularb-components/css/dist/css/components/actions.css";
import { ReactNode } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";

/**
 * A row of Buttons. Actions handles spacing and overflow.
 *
 * @param children Actions contains Buttons; the recommended limit is 3.
 * @param align How the Buttons should be positioned.
 */
const Actions: StylableFC<{
  /**
   * Actions contains Buttons. You can put as many Buttons inside Actions as
   * needed, but the recommended limit is 3.
   *
   * - Always required.
   */
  children: ReactNode;

  /**
   * How the Buttons should be positioned. It can be aligned to the left, the
   * center, the right (default), or fill the entire width.
   *
   * - Must be `left`, `center`, `right`, `full`.
   * - Optional.
   */
  align?: "left" | "center" | "right" | "full";
}> = ({
  children,
  align = "right",
  element: Element = "div",
  style,
  className,
}) => (
  <Element
    style={style}
    className={cn(
      "skc-actions",
      {
        left: "skc-actions--left",
        center: "skc-actions--center",
        right: "skc-actions--right",
        full: "skc-actions--full",
      }[align],
      className,
    )}
  >
    {children}
  </Element>
);

Actions.displayName = "Actions";

export default Actions;
