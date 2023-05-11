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
 *
 * @see {@link https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing#heading=h.v0rwfas9jvl0 SKCom documentation}
 */
export function Divider({ style, className }: DividerProps) {
  return <hr style={style} className={cn(["skc-divider", className])} />;
}

Divider.displayName = "Divider";
