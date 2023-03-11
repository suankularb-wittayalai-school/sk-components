// External libraries
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/menu.css";

// Utilities
import { cn } from "../../utils/className";
import { transition, useAnimationConfig } from "../../utils/animation";

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
  const { duration, easing } = useAnimationConfig();

  return (
    <AnimatePresence>
      {open && (
        <motion.ul
          role="menu"
          aria-orientation="vertical"
          initial={{ opacity: 0, y: "-10%", scale: 0.8 }}
          animate={{ opacity: 1, y: "0%", scale: 1 }}
          exit={{
            opacity: 0,
            y: "-10%",
            scale: 0.8,
            transition: transition(duration.short2, easing.standard),
          }}
          transition={transition(duration.short4, easing.standard)}
          className={cn(["skc-menu", className])}
          {...{ style, onBlur }}
        >
          {children}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}

Menu.displayName = "Menu";
