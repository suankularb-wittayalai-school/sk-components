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
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.3ypdzg62wg53 SKCom documentation}
 *
 * @param children Actions contains Buttons; the recommended limit is 3.
 * @param align How the Buttons should be positioned.
 */
export function Actions({ children, align, style, className }: ActionsProps) {
  return (
    <div
      style={style}
      className={cn([
        "skc-actions",
        align === "left"
          ? "skc-actions--left"
          : align === "center"
          ? "skc-actions--center"
          : align === "right"
          ? "skc-actions--right"
          : align === "full"
          ? "skc-actions--full"
          : undefined,
        className,
      ])}
    >
      {children}
    </div>
  );
}

Actions.displayName = "Actions";
