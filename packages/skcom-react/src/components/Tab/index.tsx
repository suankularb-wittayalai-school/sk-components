// External libraries
import { motion } from "framer-motion";
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/tab.css";

// Utilities
import {
  transition,
  useAnimationConfig,
  useRipple,
} from "../../utils/animation";
import { cn } from "../../utils/className";
import { kebabify } from "../../utils/format";
import { Interactive } from "../Interactive";

/**
 * Props for {@link Tab}.
 */
export interface TabProps extends SKComponent {
  /**
   * An icon appears before or above the label. Icons help users identify pages more quickly.
   *
   * - If the icon is sufficiently representative of the page, a label isn’t
   *   needed.
   * - Normally optional but required if `label` is not defined as a Tab cannot
   *   be empty.
   */
  icon?: JSX.Element;

  /**
   * An additional text label next to or underneath the icon.
   *
   * - Required if `icon` is not defined as a Tab cannot be empty.
   */
  label?: string | JSX.Element;

  /**
   * A description of the Tab for screen readers, similar to `alt` on `<img>`.
   *
   * - Required if the Tab just includes `icon`, because an icon has no
   *   significance for screen readers.
   */
  alt?: string;

  /**
   * @private
   */
  containerID?: string;

  /**
   * A message shown in a tooltip when the user hovers over the Tab.
   *
   * - Optional.
   */
  tooltip?: string;

  /**
   * Highlights the Tab. If the user is currently on this page, the Tab should
   * be highlighted.
   *
   * - Optional.
   */
  selected?: boolean;

  /**
   * The function called when the user interacts with the Tab, similar to
   * `onClick` on `<button>`.
   */
  onClick?: () => any;

  /**
   * The URL of the page this Tab leads to, similar to `href` on `<a>`.
   */
  href?: string;
}

/**
 * Tabs allow the user to switch between pages on the same level of a page
 * hierarchy. For example, an Overview, Students, and Teachers page of a class.
 *
 * @param icon An icon appears before or above the label. Icons help users identify pages more quickly.
 * @param label An additional text label next to or underneath the icon.
 * @param alt A description of the Tab for screen readers, similar to `alt` on `<img>`.
 * @param tooltip A message shown in a tooltip when the user hovers over the Tab.
 * @param selected Highlights the Tab. If the user is currently on this page, the Tab should be highlighted.
 * @param onClick The function called when the user interacts with the Tab, similar to `onClick` on `<button>`.
 * @param href The URL of the page this Tab leads to, similar to `href` on `<a>`.
 */
export function Tab({
  icon,
  label,
  alt,
  containerID,
  tooltip,
  selected,
  onClick,
  href,
  element,
  style,
  className,
}: TabProps) {
  // Animation
  const { duration, easing } = useAnimationConfig();

  // Ripple setup
  const tabRef: React.Ref<any> = React.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(tabRef);

  const tabID = `tab-${kebabify((typeof label === "string" ? label : alt)!)}`;

  return React.createElement(
    element || (href ? "a" : "button"),
    {
      ref: tabRef,
      role: "tab",
      "aria-labelledby": tabID,
      "aria-selected": selected,
      title: tooltip,
      href,
      onClick,
      style,
      className: cn(["skc-tab", selected && "skc-tab--selected", className]),
      ...rippleListeners,
    },

    <div className="skc-tab__content">
      {icon && <div className="skc-tab__icon">{icon}</div>}
      {label && (
        <span id={tabID} className="skc-tab__label">
          {label}
        </span>
      )}
      {selected && (
        <motion.span
          aria-hidden
          layoutId={containerID}
          transition={transition(duration.medium4, easing.standard)}
          className="skc-tab__indicator"
        />
      )}
    </div>,

    <div aria-hidden className="skc-tab__ripple-container">
      <motion.span
        aria-hidden
        initial={{ scale: 0, opacity: 0.36 }}
        animate={rippleControls}
        className="skc-tab__ripple"
        style={rippleStyle}
      />
    </div>
  );
}

Tab.displayName = "Tab";
