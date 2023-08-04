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
    | "display-large"
    | "display-medium"
    | "display-small"
    | "headline-large"
    | "headline-medium"
    | "headline-small"
    | "title-large"
    | "title-medium"
    | "title-small"
    | "label-large"
    | "label-medium"
    | "label-small"
    | "body-large"
    | "body-medium"
    | "body-small";
}

/**
 * A body of text with a typographic style applied.
 *
 * @param children The text to apply the typographic styling to.
 * @param type The token of the typescale to apply.
 */
export function Text({ type, children, element, className, style }: TextProps) {
  const Element = element || "span";

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
