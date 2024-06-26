// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/actions.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link Actions}.
 */
export interface ActionsProps extends SKComponent {
  /**
   * Actions contains Buttons. You can put as many Buttons inside Actions as
   * needed, but the recommended limit is 3.
   *
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * How the Buttons should be positioned. It can be aligned to the left, the
   * center, the right (default), or fill the entire width.
   *
   * - Must be `left`, `center`, `right`, `full`.
   * - Optional.
   */
  align?: "left" | "center" | "right" | "full";
}

/**
 * A row of Buttons. Actions handles spacing and overflow.
 *
 * @param children Actions contains Buttons; the recommended limit is 3.
 * @param align How the Buttons should be positioned.
 */
export function Actions({
  children,
  align = "right",
  element: Element = "div",
  style,
  className,
}: ActionsProps) {
  return (
    <Element
      style={style}
      className={cn([
        "skc-actions",
        {
          left: "skc-actions--left",
          center: "skc-actions--center",
          right: "skc-actions--right",
          full: "skc-actions--full",
        }[align],
        className,
      ])}
    >
      {children}
    </Element>
  );
}

Actions.displayName = "Actions";
