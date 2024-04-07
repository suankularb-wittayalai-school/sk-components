// External libraries
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/menu.css";

// Utilities
import { transition, useAnimationConfig } from "../../utils/animation";
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
   * A lower number means a more dense interface. In this case, less height.
   *
   * - Must be an integer: 0, -2, or -4.
   * - Optional.
   */
  density?: 0 | -2 | -4;

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
 * @param children Actions/options inside a Menu.
 * @param open If the Menu is open and shown.
 * @param density A lower number means a more dense interface. In this case, less height.
 * @param onBlur Triggers when the Menu loses focus.
 */
export function Menu({
  children,
  open,
  density,
  onBlur,
  element: Element = motion.ul,
  style,
  className,
}: MenuProps) {
  const { duration, easing } = useAnimationConfig();

  return (
    <AnimatePresence>
      {open && (
        <>
          <Element
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
            style={style}
            className={cn([
              "skc-menu",
              density === 0
                ? "skc-menu--density-0"
                : density === -2
                ? "skc-menu--density-[-2]"
                : density === -4 && "skc-menu--density-[-4]",
              className,
            ])}
          >
            {children}
          </Element>
          {onBlur && (
            <div className="skc-menu__blur-capture" onClick={onBlur} />
          )}
        </>
      )}
    </AnimatePresence>
  );
}

Menu.displayName = "Menu";
