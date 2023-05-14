// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/card-content.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link CardContent Card Content}.
 */
export interface CardContentProps extends SKComponent {
  /**
   * Card Content can contain anything, from supporting text to Actions.
   *
   * - Always required.
   */
  children: React.ReactNode;
}

/**
 * A section of content inside Card.
 *
 * @see {@link https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing#heading=h.anun9n3ld6tj SKCom documentation}
 *
 * @param children Card Content can contain anything, from supporting text to Actions.
 */
export function CardContent({
  children,
  element,
  style,
  className,
}: CardContentProps) {
  return React.createElement(
    element || "div",
    { style, className: cn(["skc-card-content", className]) },
    children
  );
}

CardContent.displayName = "CardContent";
