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
import { DURATION, EASING, transition } from "../../utils/animation";
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
  element: Element = motion.div,
  style,
  className,
}: AppDrawerProps) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <div className="skc-app-drawer__anchor">
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
            <Element
              initial={{ y: "-50%", scaleY: 0, opacity: 0 }}
              animate={{ y: 20, scaleY: 1, opacity: 1 }}
              exit={{
                y: "-50%",
                scaleY: 0,
                opacity: 0,
                transition: transition(
                  DURATION.short2,
                  EASING.emphasizedAccelerate,
                ),
              }}
              transition={transition(
                DURATION.medium4,
                EASING.emphasizedDecelerate,
              )}
              style={{ borderRadius: 16, ...style }}
              className={cn([`skc-app-drawer`, className])}
            >
              {children}
            </Element>

            {/* Scrim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="skc-scrim"
              transition={transition(DURATION.medium2, EASING.standard)}
              onClick={() => setDrawerOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
