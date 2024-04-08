// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/text.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link Text}.
 */
export interface TextProps extends SKComponent {
  /**
   * The text to apply the typographic styling to.
   */
  children: React.ReactNode;

  /**
   * The typographic style to apply.
   */
  type:
    | "button"
    | "caption"
    | "overline"
    | `${"display" | "headline" | "title" | "label" | "body"}-${
        | "large"
        | "medium"
        | "small"}`;
}

/**
 * A piece of text with a typographic style applied.
 *
 * @param children The text to apply the typographic styling to.
 * @param type The token of the typescale to apply.
 */
export function Text({
  children,
  type,
  element: Element = "span",
  className,
  style,
}: TextProps) {
  return (
    <Element
      className={cn([`skc-text skc-text--${type}`, className])}
      style={style}
    >
      {children}
    </Element>
  );
}

Text.displayName = "Text";
