// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/dialog-header.css";

// Utilities
import { cn } from "../../utils/className";
import { kebabify } from "../../utils/format";

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
   * The title text. This is useful when the supporting text is long and needs
   * a summary.
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

  /**
   * A description of the Dialog Header for screen readers, similar to
   * `alt` on `<img>`.
   *
   * - Required if:
   *   - `title` is defined and is a JSX Element, or;
   *   - `desc` is a JSX Element and title is undefined.
   */
  alt?: string;
}

/**
 * The header section houses the main content of a Dialog. It should clearly and
 * succinctly communicate a Dialog’s purpose, and allow the user to quickly make
 * a decision or enter information.
 *
 * @param icon The hero icon shown above the title text (`title`).
 * @param title The title text.
 * @param desc Complements the title text or succinctly presents the purpose of the Dialog.
 * @param alt A description of the Dialog Header for screen readers, similar to `alt` on `<img>`.
 */
export function DialogHeader({
  icon,
  title,
  desc,
  alt,
  element,
  style,
  className,
}: DialogHeaderProps) {
  const dialogID = `dialog-${kebabify(
    // Use `title` if defined
    (title
      ? // Use `title` if is not JSX Element
        typeof title === "string"
        ? title
        : // Otherwise, use `alt`
          alt
      : // If `title` is not defined, use `desc`
      typeof desc === "string"
      ? desc
      : // Otherwise, use `alt`
        alt)!
  )}`;

  return React.createElement(
    element || "div",
    { style, className: cn(["skc-dialog-header", className]) },

    // Icon
    icon && <div className="skc-dialog-header__icon">{icon}</div>,

    // Title
    title && (
      <h2 aria-label={alt} id={`${dialogID}-title`}>
        {title}
      </h2>
    ),

    // Description
    <p
      // Only use `alt` as label here if `title` is undefined
      aria-label={!title ? alt : undefined}
      id={`${dialogID}-desc`}
    >
      {desc}
    </p>
  );
}

DialogHeader.displayName = "DialogHeader";
