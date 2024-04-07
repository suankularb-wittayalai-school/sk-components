// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/divider.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link Divider}.
 */
export interface DividerProps extends SKComponent {}

/**
 * A Divider separates items in a list with a thin line. This is used when
 * separation cannot be accomplished with Cards or white space.
 */
export function Divider({ element, style, className }: DividerProps) {
  return React.createElement(element || "hr", {
    style,
    className: cn(["skc-divider", className]),
  });
}

Divider.displayName = "Divider";
