// External libraries
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/nav-drawer.css";

// Utilities
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";

/**
 * Props for {@link NavDrawer}.
 */
export interface NavDrawerProps extends SKComponent {
  /**
   * All destinations within an app. Destinations can be grouped with the help
   * of Navigation Drawer Sections.
   *
   * - Must consist of Navigation Drawer Sections.
   * - The first should consist of top-level pages.
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * If true, the Navigation Drawer will slide in to the screen, otherwise it
   * would slide out of view.
   *
   * - Optional.
   */
  open?: boolean;

  /**
   * The function triggered when the scrim is clicked.
   */
  onClose: () => any;
}

/**
 * A list of all destinations within an app.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.2czacyab5zgs SKCom documentation}
 *
 * @param children All destinations within an app. Destinations can be grouped with the help of Navigation Drawer Sections.
 * @param open If true, the Navigation Drawer will slide in to the screen, otherwise it would slide out of view.
 */
export function NavDrawer({
  children,
  open,
  onClose,
  style,
  className,
}: NavDrawerProps) {
  const { duration, easing } = useAnimationConfig();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.aside
            initial={{ scaleX: 0.2, x: "-100%" }}
            animate={{ scaleX: 1, x: "0%" }}
            exit={{
              scaleX: 0.2,
              x: "-100%",
              transition: transition(
                duration.short4,
                easing.standardAccelerate
              ),
            }}
            transition={transition(duration.medium4, easing.standardDecelerate)}
            style={style}
            className={cn(["skc-nav-drawer", className])}
          >
            <nav>{children}</nav>
          </motion.aside>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{
              opacity: 0,
              transition: transition(duration.short4, easing.standard),
            }}
            transition={transition(duration.medium4, easing.standard)}
            onClick={onClose}
            className="skc-scrim"
          />
        </>
      )}
    </AnimatePresence>
  );
}

NavDrawer.displayName = "NavDrawer";
