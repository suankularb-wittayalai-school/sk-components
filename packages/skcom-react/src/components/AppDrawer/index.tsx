// External libraries
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";

// Internal components
import { Button } from "../Button";
import { MaterialIcon } from "../MaterialIcon";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/app-drawer.css";

// Utilities
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";

export interface AppDrawerProps extends SKComponent {
  /**
   * App Drawer Segments.
   */
  children: React.ReactNode;

  /**
   * Allows for translation of the accessibility labels.
   *
   * - Must be `th` or `en-US`, as SKCom currently only support those 2
   *   languages.
   * - Optional.
   */
  locale?: "en-US" | "th";

  /**
   * Triggers when the toggle Button opens the drawer.
   */
  onOpen?: () => any;
}

/**
 * A drawer of related apps.
 *
 * @param children App Drawer Segments.
 * @param locale Allows for translation of the accessibility labels.
 * @param onOpen Triggers when the toggle Button opens the drawer.
 */
export function AppDrawer({
  children,
  locale,
  onOpen,
  style,
  className,
}: AppDrawerProps) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const { duration, easing } = useAnimationConfig();

  return (
    <div className="relative">
      {/* Toggle */}
      <Button
        appearance="text"
        icon={<MaterialIcon icon="apps" />}
        onClick={() => {
          onOpen?.();
          setDrawerOpen(!drawerOpen);
        }}
        className="skc-app-drawer__toggle"
      >
        {locale === "th" ? "ตัวเลือกแอพ" : "Apps"}
      </Button>

      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Drawer */}
            <motion.div
              initial={{ y: "-50%", scaleY: 0 }}
              animate={{ y: 20, scaleY: 1 }}
              exit={{
                y: "-50%",
                scaleY: 0,
                transition: transition(
                  duration.short2,
                  easing.standardAccelerate
                ),
              }}
              transition={transition(
                duration.medium4,
                easing.standardDecelerate
              )}
              style={{ borderRadius: 16, ...style }}
              className={cn([`skc-app-drawer`, className])}
            >
              {children}
            </motion.div>

            {/* Scrim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="skc-scrim"
              transition={transition(duration.medium2, easing.standard)}
              onClick={() => setDrawerOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
