import "@suankularb-components/css/dist/css/components/nav-drawer.css";
import { AnimatePresence, motion } from "framer-motion";
import {
  Children,
  ComponentProps,
  ReactNode,
  cloneElement,
  useEffect,
} from "react";
import { StylableFC } from "../../types";
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";
import { matchDisplayName } from "../../utils/displayName";
import NavDrawerItem from "../NavDrawerItem";
import NavDrawerSection from "../NavDrawerSection";

/**
 * A list of all destinations within an app.
 *
 * @param children All destinations within an app. Destinations can be grouped with the help of Navigation Drawer Sections.
 * @param open If true, the Navigation Drawer will slide in to the screen, otherwise it would slide out of view.
 * @param onClose The function triggered when the scrim is clicked.
 */
const NavDrawer: StylableFC<{
  /**
   * All destinations within an app. Destinations can be grouped with the help
   * of Navigation Drawer Sections.
   *
   * - Must consist of Navigation Drawer Sections.
   * - The first should consist of top-level pages.
   * - Always required.
   */
  children: ReactNode;

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

  /**
   * This prop is not supported by this component.
   */
  element?: never;
}> = ({ children, open, onClose, style, className }) => {
  const { duration, easing } = useAnimationConfig();

  // Close the Drawer with the escape key
  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Focus on the selected link
  useEffect(() => {
    if (open) {
      const navDrawerItem = document.querySelector<HTMLAnchorElement>(
        ".skc-nav-drawer-item--selected",
      );
      navDrawerItem?.focus();
    }
  }, [open]);

  // Make the Navigation Drawer close when a Navigation Drawer Item is clicked
  const injectedChildren =
    // For each Navigation Drawer Section
    Children.map(children, (section) =>
      matchDisplayName(section, "NavDrawerSection")
        ? cloneElement(section as JSX.Element, {
            children:
              // For each Navigation Drawer Item
              Children.map(
                (
                  (section as JSX.Element).props as ComponentProps<
                    typeof NavDrawerSection
                  >
                ).children,
                // Inject `onClick`, where the Navigation Drawer will close when a
                // Navigation Drawer Item is clicked
                (item) =>
                  matchDisplayName(item, "NavDrawerItem")
                    ? cloneElement(item as JSX.Element, {
                        onClick: () => {
                          const { onClick } = (item as JSX.Element)
                            .props as ComponentProps<typeof NavDrawerItem>;
                          onClose();
                          if (onClick) onClick();
                        },
                      })
                    : item,
              ),
          })
        : section,
    );

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Scrim */}
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

          {/* Navigation Drawer */}
          <motion.aside
            initial={{ scaleX: 0.2, x: "-100%" }}
            animate={{ scaleX: 1, x: "0%" }}
            exit={{
              scaleX: 0.2,
              x: "-100%",
              transition: transition(
                duration.short4,
                easing.standardAccelerate,
              ),
            }}
            transition={transition(duration.medium4, easing.standardDecelerate)}
            aria-modal={true}
            style={style}
            className={cn("skc-nav-drawer", className)}
          >
            <nav>{injectedChildren}</nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

NavDrawer.displayName = "NavDrawer";

export default NavDrawer;
