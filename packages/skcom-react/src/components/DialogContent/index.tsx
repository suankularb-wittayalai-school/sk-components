// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/dialog-content.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link DialogContent Dialog Header}.
 */
export interface DialogContentProps extends SKComponent {
  /**
   * A Dialog Content can include anything. A common use case is List.
   *
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * The height of this component. If its content is taller than this value,
   * Dialog Content scrolls.
   *
   * - Setting a height will show Dividers on top of and below the component.
   * - Optional.
   */
  height?: number;
}

/**
 * Additional content that supplements the Dialog Header. This is where the
 * user can see more details about a decision or a space for the user to enter
 * information.
 *
 * @see {@link https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing#heading=h.vcs7cvubpd7l SKCom documentation}
 *
 * @param children A Dialog Content can include anything. A common use case is List.
 * @param height The height of this component. If its content is taller than this value, Dialog Content scrolls.
 */
export function DialogContent({
  children,
  height,
  element,
  style,
  className,
}: DialogContentProps) {
  return React.createElement(
    element || "div",
    {
      style: { ...style, height },
      className: cn([
        "skc-dialog-content",
        height !== undefined && "skc-dialog-content--scrollable",
        className,
      ]),
    },
    children
  );
}

DialogContent.displayName = "DialogContent";
