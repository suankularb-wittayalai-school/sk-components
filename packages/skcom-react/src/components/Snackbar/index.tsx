// External libraries
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/snackbar.css";

// Utilities
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";

/**
 * Props for {@link Snackbar}.
 */
export interface SnackbarProps extends SKComponent {
  /**
   * The message inside the Snackbar.
   *
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * A Snackbar can contain 1 action. Pressing this action closes the Snackbar.
   *
   * - Must contain 1 Button with text appearance.
   * - Optional.
   */
  action?: JSX.Element;

  /**
   * Put the message (`children`) above the action (`action`).
   *
   * - This is useful if the action text is long.
   * - Optional.
   */
  stacked?: boolean;

  /**
   * If the Snackbar is open and visible.
   *
   * - Optional.
   */
  open?: Boolean;

  /**
   * Triggers when the close Button is pressed.
   *
   * - `onClose` is not triggered when the Snackbar dismisses itself.
   */
  onClose?: () => any;

  /**
   * Triggers after the Snackbar has completely exited the screen.
   *
   * - Snackbar does not close on its own. This function triggers a few moments
   *   after `open` is set to false when the exit animation ends.
   * - Optional.
   */
  onExitComplete?: () => any;
}

/**
 * Snackbar briefly shows low priority information that does not require
 * action, as opposed to Dialog. It can inform the user about ongoing processes
 * or an event that has just been completed.
 *
 * Note that Snackbar, as per SKCom’s principles, does not do state management
 * on its own. Use the `children`, `open`, `onClose`, and `onExitComplete`
 * props with your own state management solution.
 *
 * @param children The message inside the Snackbar.
 * @param action A Snackbar can contain 1 action. Pressing this action closes the Snackbar.
 * @param stacked Put the message (`children`) above the action (`action`).
 * @param open If the Snackbar is open and visible.
 * @param onClose Triggers when the close Button is pressed.
 * @param onExitComplete Triggers after the Snackbar has completely exited the screen.
 */
export function Snackbar({
  children,
  action,
  stacked,
  open,
  onClose,
  onExitComplete,
  element: Element = motion.div,
  style,
  className,
}: SnackbarProps) {
  const { duration, easing } = useAnimationConfig();

  return (
    <aside>
      <AnimatePresence {...{ onExitComplete }}>
        {open && (
          <Element
            role="status"
            aria-relevant="additions"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: 20,
              transition: transition(
                duration.short2,
                easing.standardAccelerate
              ),
            }}
            transition={transition(duration.medium2, easing.standardDecelerate)}
            style={style}
            className={cn([
              "skc-snackbar",
              stacked && "skc-snackbar--stacked",
              className,
            ])}
          >
            <span className="skc-snackbar__label">{children}</span>
            {action && (
              <div className="skc-snackbar__action">
                {React.cloneElement(action as JSX.Element, {
                  onClick: () => {
                    if (onClose) onClose();
                    const { onClick } = action.props;
                    if (onClick) onClick();
                  },
                })}
              </div>
            )}
          </Element>
        )}
      </AnimatePresence>
    </aside>
  );
}

Snackbar.displayName = "Snackbar";
