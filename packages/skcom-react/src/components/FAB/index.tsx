// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/fab.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link FAB}.
 */
export interface FABProps extends SKComponent {
  children: React.ReactNode
}

/**
 * The Floating Action Button or FAB is the main action of a page.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.v2ft1p7l7f8a SKCom documentation}
 *
 * @param
 */
export function FAB({ children, style, className }: FABProps) {
  return <button className="skc-fab skc-fab--surface">{children}</button>;
}

FAB.displayName = "FAB";
