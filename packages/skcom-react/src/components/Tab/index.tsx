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
   *
   * - Incompatible with `href`.
   */
  onClick?: () => any;

  /**
   * The URL of the page this Tab leads to, similar to `href` on `<a>`.
   *
   * - Incompatible with `onClick`.
   */
  href?: string;

  /**
   * Change the underlying element from `<a>` to a custom element. This is
   * useful when a framework you’re using has a Link component for routing. An
   * example is `next/link` from Next.js.
   *
   * - Optional.
   */
  element?: ({
    children,
    ref,
    title,
    style,
    className,
    href,
    onTouchStart,
    onMouseDown,
    onKeyDown,
  }: {
    children: React.ReactNode;
    ref: React.MutableRefObject<any>;
    title?: string;
    style?: React.CSSProperties;
    className: any;
    href: string;
    onTouchStart: (event: React.TouchEvent) => void;
    onMouseDown: (event: React.MouseEvent) => void;
    onKeyDown: (event: React.KeyboardEvent) => void;
  }) => JSX.Element | null;
}

/**
 * Tabs allow the user to switch between pages on the same level of a page
 * hierarchy. For example, an Overview, Students, and Teachers page of a class.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.g56fs6ts5kqq SKCom documentation}
 *
 * @param icon An icon appears before or above the label. Icons help users identify pages more quickly.
 * @param label An additional text label next to or underneath the icon.
 * @param alt A description of the Tab for screen readers, similar to `alt` on `<img>`.
 * @param tooltip A message shown in a tooltip when the user hovers over the Tab.
 * @param selected Highlights the Tab. If the user is currently on this page, the Tab should be highlighted.
 * @param onClick The function called when the user interacts with the Tab, similar to `onClick` on `<button>`.
 * @param href The URL of the page this Tab leads to, similar to `href` on `<a>`.
 * @param element Change the underlying element from `<a>` to a custom element.
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
  element: Element,
  style,
  className,
}: TabProps) {
  // Animation
  const { duration, easing } = useAnimationConfig();

  // Ripple setup
  const tabRef: React.LegacyRef<any> = React.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(tabRef);

  const tabID = `tab-${kebabify((typeof label === "string" ? label : alt)!)}`;

  const props = {
    ref: tabRef,
    role: "tab",
    "aria-labelledby": tabID,
    "aria-selected": selected,
    title: tooltip,
    style,
    className: cn(["skc-tab", selected && "skc-tab--selected", className]),
    ...rippleListeners,
  };

  const content = (
    <>
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
      </div>
      <div aria-hidden className="skc-tab__ripple-container">
        <motion.span
          aria-hidden
          initial={{ scale: 0, opacity: 0.36 }}
          animate={rippleControls}
          className="skc-tab__ripple"
          style={rippleStyle}
        />
      </div>
    </>
  );

  return (
    // Render with `element` if defined
    href && Element ? (
      <Element {...props} href={href}>
        {content}
      </Element>
    ) : // Render an `<a>` if link passed in
    href ? (
      <a {...props} href={href}>
        {content}
      </a>
    ) : (
      // Otherwise, render a `<button>`
      <button {...{ ...props, onClick }} type="button">
        {content}
      </button>
    )
  );
}

Tab.displayName = "Tab";
