// External libraries
import { AnimatePresence } from "framer-motion";
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/fullscreen-dialog.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link FullscreenDialog Full-screen Dialog}.
 */
export interface FullscreenDialogProps extends SKComponent {
  /**
   * The content.
   *
   * - Always required.
   */
  children?: React.ReactNode;

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
   * - Always required.
   */
  action: JSX.Element;

  /**
   * Full-screen Dialog transforms into a basic Dialog on larger screens. The
   * width of the Dialog can be set here.
   *
   * - Optional.
   */
  width?: React.CSSProperties["width"];
}

/**
 * A Full-screen Dialog fills the entire screen containing a series of tasks
 * required to complete.
 *
 * A Full-screen Dialog only fills the screen on mobile and turns into a Dialog
 * on larger screens. A Dialog can appear above a Full-screen Dialog.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.n92froio6418 SKCom documentation}
 *
 * @param children The content.
 * @param open If the Full-screen Dialog is open and shown.
 * @param title The title text.
 * @param action The submission Button.
 * @param width The width of the Dialog this Full-screen Dialog transforms into can be set here.
 */
export function FullscreenDialog({
  children,
  open,
  title,
  action,
  width,
  style,
  className,
}: FullscreenDialogProps) {
  return (
    <AnimatePresence>
      {open && (
        <div
          // `alertdialog` is a type of `dialog` for interrupting the user flow.
          role="alertdialog"
          aria-modal="true"
          style={{ ...style, width }}
          className={cn(["skc-fullscreen-dialog", className])}
        >
          {children}
        </div>
      )}
    </AnimatePresence>
  );
}

FullscreenDialog.displayName = "FullscreenDialog";
