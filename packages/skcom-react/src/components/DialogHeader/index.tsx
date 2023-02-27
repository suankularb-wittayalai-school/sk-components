// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/dialog-header.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link DialogHeader Dialog Header}.
 */
export interface DialogHeaderProps extends SKComponent {
  /**
   * The hero icon shown above the title text (`title`).
   *
   * - You are encouraged to use Material Icons as the value for `icon`.
   * - Optional.
   */
  icon?: JSX.Element;

  /**
   * The title text. This is useful when the supporting text is long and needs a summary.
   *
   * - Optional.
   */
  title?: string | JSX.Element;

  /**
   * With a title (`title`), the supporting text complements the title text
   * with more details.
   *
   * On its own, it succinctly presents the purpose of the Dialog, like
   * “Discard draft?,” for a confirmation on exiting a page without saving.
   *
   * - Always required.
   */
  desc: string | JSX.Element;
}

/**
 * A row of Buttons. DialogHeader handles spacing and overflow.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.3ypdzg62wg53 SKCom documentation}
 *
 * @param icon The hero icon shown above the title text (`title`).
 * @param title The title text.
 * @param desc Complements the title text or succinctly presents the purpose of the Dialog.
 */
export function DialogHeader({
  icon,
  title,
  desc,
  style,
  className,
}: DialogHeaderProps) {
  return (
    <div style={style} className={cn(["skc-dialog-header", className])}>
      {icon && <div className="skc-dialog-header__icon">{icon}</div>}
      {title && <h2>{title}</h2>}
      <p>{desc}</p>
    </div>
  );
}

DialogHeader.displayName = "DialogHeader";
