import "@suankularb-components/css/dist/css/components/fullscreen-dialog.css";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { dash } from "radash";
import {
  Children,
  cloneElement,
  CSSProperties,
  ReactNode,
  useEffect,
} from "react";
import { LangCode, StylableFC } from "../../types";
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";
import { useBreakpoint } from "../../utils/window";
import Button from "../Button";
import MaterialIcon from "../MaterialIcon";

/**
 * A Full-screen Dialog fills the entire screen containing a series of tasks
 * required to complete.
 *
 * A Full-screen Dialog only fills the screen on mobile and turns into a Dialog
 * on larger screens. A Dialog can appear above a Full-screen Dialog.
 *
 * @param children The content.
 * @param open If the Full-screen Dialog is open and shown.
 * @param title The title text.
 * @param action The submission Button.
 * @param width The width of the Dialog this Full-screen Dialog transforms into can be set here.
 * @param locale Allows for translation of the accessibility labels.
 * @param onClose The function triggered when the scrim is clicked.
 */
const FullscreenDialog: StylableFC<{
  /**
   * The content.
   *
   * - Always required.
   */
  children?: ReactNode;

  /**
   * If the Full-screen Dialog is open and shown.
   *
   * - Optional.
   */
  open?: boolean;

  /**
   * The title text.
   *
   * - Always required.
   */
  title: string | JSX.Element;

  /**
   * The submission Button.
   *
   * - Should be a Button.
   * - Optional.
   */
  action?: JSX.Element;

  /**
   * Full-screen Dialog transforms into a basic Dialog on larger screens. The
   * width of the Dialog can be set here.
   *
   * - Optional.
   */
  width?: CSSProperties["width"];

  /**
   * A description of the Full-screen Dialog for screen readers, similar to
   * `alt` on `<img>`.
   *
   * - Required if `title` is a JSX Element, as it is used to generate the ID
   *   crucial for accessibility.
   */
  alt?: string;

  /**
   * Allows for translation of the accessibility labels.
   *
   * - Must be `th` or `en-US`, as SKCom currently only support those 2
   *   languages.
   * - Optional.
   */
  locale?: LangCode;

  /**
   * The function triggered when the scrim is clicked.
   */
  onClose: () => any;

  /**
   * This prop is not supported by this component.
   */
  element?: never;
}> = ({
  children,
  open,
  title,
  action,
  width,
  alt,
  locale = "en-US",
  onClose,
  style,
  className,
}) => {
  // Animations
  // Dialog and Full-screen Dialog have different animations. The animation is
  // determined with the current breakpoint.

  const { duration, easing } = useAnimationConfig();
  const { atBreakpoint } = useBreakpoint();

  const dialogAnimation: Variants = {
    initial: { opacity: 0, scaleY: 0, x: "-50%", y: "-150%" },
    animate: { opacity: 1, scaleY: 1, y: "-50%" },
    exit: {
      opacity: 0,
      scaleY: 0.5,
      y: "-90%",
      transition: transition(duration.short2, easing.standardAccelerate),
    },
  };

  const fullscreenDialogAnimation: Variants = {
    initial: { opacity: 0, scale: 0.75 },
    animate: { opacity: 1, scale: 1, x: 0, y: 0 },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: transition(duration.short2, easing.standardAccelerate),
    },
  };

  // Focus on the main Button
  useEffect(() => {
    if (open) {
      const actions = document.querySelector<HTMLDivElement>(
        ".skc-fullscreen-dialog__top-app-bar",
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
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, []);

  // Generate the base ID for `aria-labelledby` and `aria-describedby`
  const dialogID = `dialog-${dash((typeof title === "string" ? title : alt)!)}`;

  // Inject first `<p>` element with an ID that `aria-describedby` can point to
  let pIsInjected = false;
  const injectedChildren = Children.map(children, (child) => {
    if ((child as JSX.Element).type === "p") {
      // If a `<p>` was already injected, don’t inject this `<p>`
      if (pIsInjected) return child;

      // Inject the first `<p>` with an ID
      pIsInjected = true;
      return cloneElement(child as JSX.Element, {
        id: `${dialogID}-desc`,
      });
    }

    // Leave other children untouched
    return child;
  });

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
            className="skc-scrim"
            onClick={onClose}
          />

          {/* Full-screen Dialog */}
          <motion.div
            // `alertdialog` is a type of `dialog` for interrupting the user
            // flow.
            role="alertdialog"
            aria-labelledby={`${dialogID}-title`}
            aria-describedby={`${dialogID}-desc`}
            aria-modal="true"
            {...(atBreakpoint === "base"
              ? fullscreenDialogAnimation
              : dialogAnimation)}
            transition={transition(duration.medium2, easing.standardDecelerate)}
            style={{
              ...style,
              ...(atBreakpoint !== "base" ? { width, borderRadius: 28 } : {}),
            }}
            className={cn("skc-fullscreen-dialog", className)}
          >
            {/* Top app bar */}
            <div className="skc-fullscreen-dialog__top-app-bar">
              <Button
                appearance="text"
                icon={<MaterialIcon icon="close" />}
                alt={locale === "th" ? "ปิดหน้าต่าง" : "Close"}
                onClick={onClose}
              />
              <h2 id={`${dialogID}-title`}>{title}</h2>
              {action}
            </div>

            {/* Content */}
            <div className="skc-fullscreen-dialog__content">
              {injectedChildren}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

FullscreenDialog.displayName = "FullscreenDialog";

export default FullscreenDialog;
