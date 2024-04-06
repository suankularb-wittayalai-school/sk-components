import "@suankularb-components/css/dist/css/components/menu.css";
import { AnimatePresence, motion } from "framer-motion";
import { ComponentProps, ReactNode } from "react";
import { StylableFC } from "../../types";
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";

/**
 * A list of actions/options on a temporary surface.
 *
 * @param children Actions/options inside a Menu.
 * @param open If the Menu is open and shown.
 * @param density A lower number means a more dense interface. In this case, less height.
 * @param onBlur Triggers when the Menu loses focus.
 * @param ulAttr Attributes for the underlying `<ul>` element.
 */
const Menu: StylableFC<{
  /**
   * Actions/options inside a Menu.
   *
   * - Must consist of Menu Item(s).
   * - Always required.
   */
  children: ReactNode;

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

  /**
   * Attributes for the underlying `<ul>` element.
   *
   * - Optional.
   */
  ulAttr?: ComponentProps<typeof motion.ul>;

  /**
   * This prop is not supported by this component.
   */
  element?: never;
}> = ({ children, open, density = 0, onBlur, ulAttr, style, className }) => {
  const { duration, easing } = useAnimationConfig();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.ul
            role="menu"
            aria-orientation="vertical"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{
              opacity: 0,
              scaleY: 0,
              transition: transition(duration.short2, easing.standard),
            }}
            transition={transition(duration.short4, easing.standard)}
            className={cn(
              "skc-menu",
              {
                [0]: "skc-menu--density-0",
                [-2]: "skc-menu--density-[-2]",
                [-4]: "skc-menu--density-[-4]",
              }[density],
              className,
            )}
            {...{ ...ulAttr, style }}
          >
            {children}
          </motion.ul>
          {onBlur && (
            <div className="skc-menu__blur-capture" onClick={onBlur} />
          )}
        </>
      )}
    </AnimatePresence>
  );
};

Menu.displayName = "Menu";

export default Menu;
