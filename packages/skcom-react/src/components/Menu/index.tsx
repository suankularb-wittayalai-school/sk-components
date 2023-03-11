// External libraries
import { AnimatePresence } from "framer-motion";
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/menu.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link Menu}.
 */
export interface MenuProps extends SKComponent {
  /**
   * Actions/options inside a Menu.
   *
   * - Must consist of Menu Item(s).
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * If the Menu is open and shown.
   *
   * - Optional.
   */
  open?: boolean;

  /**
   * Triggers when the Menu loses focus (as in the user clicking/tapping
   * outside the Menu)
   *
   * - Optional.
   */
  onBlur?: () => any;
}

/**
 * A list of actions/options on a temporary surface.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.s1l0jijrvyiu SKCom documentation}
 *
 * @param children Actions/options inside a Menu.
 * @param open If the Menu is open and shown.
 * @param onBlur Triggers when the Menu loses focus.
 */
export function Menu({ children, open, onBlur, style, className }: MenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <ul
          role="menu"
          aria-orientation="vertical"
          className={cn(["skc-menu", className])}
          {...{ style, onBlur }}
        >
          {children}
        </ul>
      )}
    </AnimatePresence>
  );
}

Menu.displayName = "Menu";
