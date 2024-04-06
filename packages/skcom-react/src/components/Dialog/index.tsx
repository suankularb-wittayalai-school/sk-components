import "@suankularb-components/css/dist/css/components/dialog.css";
import { AnimatePresence, motion } from "framer-motion";
import { dash } from "radash";
import {
  CSSProperties,
  Children,
  ComponentProps,
  ReactNode,
  useEffect,
} from "react";
import { StylableFC } from "../../types";
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";
import { matchDisplayName } from "../../utils/displayName";
import DialogHeader from "../DialogHeader";

/**
 * A Dialog interrupts the user to have them make an immediately significant
 * decision or prompts a user to enter important information.
 *
 * @param children Parts of a Dialog.
 * @param open If the Dialog is open and shown.
 * @param width The width of the Dialog.
 * @param onClose The function triggered when the scrim is clicked.
 */
const Dialog: StylableFC<{
  /**
   * Parts of a Dialog.
   *
   * - Dialog Header and Actions are required components and must appear in the
   *   said order.
   * - If present, Dialog Content must appear between Dialog Header and
   *   Actions.
   */
  children: ReactNode;

  /**
   * If the Dialog is open and shown.
   *
   * - Optional.
   */
  open?: boolean;

  /**
   * The width of the Dialog. This is useful when you want to fit more content
   * into a Dialog, or when you have many overlapping Dialogs.
   *
   * - Optional.
   */
  width?: CSSProperties["width"];

  /**
   * The function triggered when the scrim is clicked.
   */
  onClose: () => any;

  /**
   * This prop is not supported by this component.
   */
  element?: never;
}> = ({ children, open, width, onClose, style, className }) => {
  const { duration, easing } = useAnimationConfig();

  // Focus on the main Button
  useEffect(() => {
    if (open) {
      const actions = document.querySelector<HTMLDivElement>(
        ".skc-dialog > .skc-actions",
      );

      const buttons =
        actions?.querySelectorAll<HTMLButtonElement>(".skc-button");
      if (buttons?.length) buttons[buttons.length - 1].focus();
    }
  }, [open]);

  // Close the Dialog with the escape key
  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Accessibility labels
  let dialogID: string | undefined;
  Children.forEach(children, (child) => {
    // Find the Dialog Header
    if (matchDisplayName(child, "DialogHeader")) {
      // Grab `title`, `desc`, and `alt`
      const { title, desc, alt } = (child as JSX.Element)
        .props as ComponentProps<typeof DialogHeader>;

      // Only use `title` if it is a string, otherwise use `alt`
      dialogID = `dialog-${dash(
        // Use `title` if defined
        (title
          ? // Use `title` if is not JSX Element
            typeof title === "string"
            ? title
            : // Otherwise, use `alt`
              alt
          : // If `title` is not defined, use `desc`
            typeof desc === "string"
            ? desc
            : // Otherwise, use `alt`
              alt)!,
      )}`;
    }
  });

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Scrim */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{
              opacity: 0,
              transition: transition(duration.short4, easing.standard),
            }}
            transition={transition(duration.medium4, easing.standard)}
            className="skc-scrim"
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            // `alertdialog` is a type of `dialog` for interrupting the user flow.
            role="alertdialog"
            aria-modal="true"
            aria-labelledby={`${dialogID}-title`}
            aria-describedby={`${dialogID}-desc`}
            initial={{ opacity: 0, scaleY: 0, x: "-50%", y: "-150%" }}
            animate={{ opacity: 1, scaleY: 1, y: "-50%" }}
            exit={{
              opacity: 0,
              scaleY: 0.5,
              y: "-90%",
              transition: transition(
                duration.short2,
                easing.standardAccelerate,
              ),
            }}
            transition={transition(duration.medium2, easing.standardDecelerate)}
            style={{ ...style, width, borderRadius: 28 }}
            className={cn("skc-dialog", className)}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

Dialog.displayName = "Dialog";

export default Dialog;
