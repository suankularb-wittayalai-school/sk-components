import "@suankularb-components/css/dist/css/components/app-drawer.css";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { LangCode, StylableFC } from "../../types";
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";
import Button from "../Button";
import MaterialIcon from "../MaterialIcon";

/**
 * A drawer of related apps.
 *
 * @param children App Drawer Segments.
 * @param locale Allows for translation of the accessibility labels.
 * @param onOpen Triggers when the toggle Button opens the drawer.
 */
const AppDrawer: StylableFC<{
  /**
   * App Drawer Segments.
   */
  children: ReactNode;

  /**
   * Allows for translation of the accessibility labels.
   *
   * - Must be `th` or `en-US`, as SKCom currently only support those 2
   *   languages.
   * - Optional.
   */
  locale?: LangCode;

  /**
   * Triggers when the toggle Button opens the drawer.
   */
  onOpen?: () => any;
}> = ({
  children,
  locale = "en-US",
  onOpen,
  element: Element = "div",
  style,
  className,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { duration, easing } = useAnimationConfig();

  return (
    <Element className="skc-app-drawer__anchor">
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
        {{ "en-US": "Apps", th: "ตัวเลือกแอพ" }[locale]}
      </Button>

      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Drawer */}
            <motion.div
              initial={{ y: "-50%", scaleY: 0, opacity: 0 }}
              animate={{ y: 20, scaleY: 1, opacity: 1 }}
              exit={{
                y: "-50%",
                scaleY: 0,
                opacity: 0,
                transition: transition(
                  duration.short2,
                  easing.standardAccelerate,
                ),
              }}
              transition={transition(
                duration.medium4,
                easing.standardDecelerate,
              )}
              style={{ borderRadius: 16, ...style }}
              className={cn(`skc-app-drawer`, className)}
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
    </Element>
  );
};

AppDrawer.displayName = "AppDrawer";

export default AppDrawer;
