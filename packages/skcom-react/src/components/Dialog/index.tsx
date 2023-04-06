// External libraries
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";

// Internal components
import { DialogHeaderProps } from "../DialogHeader";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/dialog.css";

// Utilities
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";
import { matchDisplayName } from "../../utils/displayName";
import { kebabify } from "../../utils/format";

/**
 * Props for {@link Dialog}.
 */
export interface DialogProps extends SKComponent {
  /**
   * Parts of a Dialog.
   *
   * - Dialog Header and Actions are required components and must appear in the
   *   said order.
   * - If present, Dialog Content must appear between Dialog Header and
   *   Actions.
   */
  children: React.ReactNode;

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
  width?: React.CSSProperties["width"];

  /**
   * The function triggered when the scrim is clicked.
   */
  onClose: () => any;
}

/**
 * A Dialog interrupts the user to have them make an immediately significant
 * decision or prompts a user to enter important information.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.3ypdzg62wg53 SKCom documentation}
 *
 * @param children Parts of a Dialog.
 * @param open If the Dialog is open and shown.
 * @param width The width of the Dialog.
 * @param onClose The function triggered when the scrim is clicked.
 */
export function Dialog({
  children,
  open,
  width,
  onClose,
  style,
  className,
}: DialogProps) {
  const { duration, easing } = useAnimationConfig();

  // Focus on the main Button
  React.useEffect(() => {
    if (open) {
      const actions = document.querySelector<HTMLDivElement>(
        ".skc-dialog > .skc-actions"
      );

      const buttons =
        actions?.querySelectorAll<HTMLButtonElement>(".skc-button");
      if (buttons?.length) buttons[buttons.length - 1].focus();
    }
  }, [open]);

  // Close the Dialog with the escape key
  React.useEffect(() => {
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
  React.Children.forEach(children, (child) => {
    // Find the Dialog Header
    if (matchDisplayName(child, "DialogHeader")) {
      // Grab `title`, `desc`, and `alt`
      const { title, desc, alt } = (child as JSX.Element)
        .props as DialogHeaderProps;

      // Only use `title` if it is a string, otherwise use `alt`
      dialogID = `dialog-${kebabify(
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
            alt)!
      )}`;
    }
  });

  return (
    <AnimatePresence>
      {open && (
        <>
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
                easing.standardAccelerate
              ),
            }}
            transition={transition(duration.medium2, easing.standardDecelerate)}
            style={{ ...style, width }}
            className={cn(["skc-dialog", className])}
          >
            {children}
          </motion.div>
          <motion.div
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
        </>
      )}
    </AnimatePresence>
  );
}

Dialog.displayName = "Dialog";
