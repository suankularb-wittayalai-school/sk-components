// External libraries
import { motion, useAnimationControls } from "framer-motion";
import * as React from "react";

// Internal components
import { MaterialIcon } from "../MaterialIcon";

// Types
import { SKComponent } from "../types";

// Styles
import "@suankularb-components/css/dist/css/components/button.css";

// Utilities
import { cn } from "../utils/className";

export interface ButtonProps extends SKComponent {
  children?: React.ReactNode;
  appearance: "filled" | "tonal" | "outlined" | "text";
  icon?: JSX.Element;
  alt?: string;
  tooltip?: string;
  selected?: boolean;
  dangerous?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => any;
  href?: string;
  element?: ({
    children,
    href,
    className,
  }: {
    children: React.ReactNode;
    href: string;
    className: string;
  }) => any;
}

/**
 * Button helps users take action, whether it’s logging in, liking a post, or going to a page.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.48e8htvs5p0g SKCom documentation}
 *
 * @param children The text displayed inside the Button.
 * @param appearance The appearance of the Button.
 * @param icon An icon can appear before the text (`children`) in a Button. In a page with many buttons, icons can quickly orient users.
 * @param alt A description of the Button for screen readers, similar to `alt` on `<img>`.
 * @param tooltip A message shown in a tooltip when the user hovers over the Button.
 * @param selected If the Button is selected. `icon` is replaced with a checkmark if this is true.
 * @param dangerous If the action the Button accomplishes is dangerous, like deleting your account.
 * @param loading Disable the Button and add a Progress spinner in front of the text to signify loading status.
 * @param disabled Turns the Button gray and block any action associated with it.
 * @param onClick The function called when the user interacts with the Button, similar to `onClick` on `<button>`.
 * @param href The URL of the page this Button leads to, similar to `href` on `<a>`.
 * @param element Change the underlying element from `<a>` to a custom element.
 */
export function Button({
  children,
  appearance,
  icon,
  alt,
  tooltip,
  selected,
  dangerous,
  loading,
  disabled,
  onClick,
  href,
  element,
  style,
  className,
}: ButtonProps) {
  const buttonRef = React.useRef(null);
  const rippleControls = useAnimationControls();
  const [diameter, setDiameter] = React.useState(0);
  React.useEffect(() => {
    const button = buttonRef.current as any;
    setDiameter(Math.max(button.clientWidth, button.clientHeight));
  }, []);
  const [position, setPosition] = React.useState({ top: "0", left: "0" });

  const props = {
    ref: buttonRef,
    "aria-label": alt,
    title: tooltip,
    style,
    className: cn([
      "skc-button",
      appearance === "filled"
        ? "skc-button--filled"
        : appearance === "tonal"
        ? "skc-button--tonal"
        : appearance === "outlined"
        ? "skc-button--outlined"
        : appearance === "text"
        ? "skc-button--text"
        : undefined,
      selected && "skc-button--selected",
      dangerous && "skc-button--dangerous",
      (loading || disabled) && "skc-button--disabled",
      className,
    ]),
    onClick: (event: React.MouseEvent) => {
      if (onClick && !href) onClick();

      const button = buttonRef.current as any;
      setPosition({
        top: `${event.clientY - (button.offsetTop + diameter / 2)}px`,
        left: `${event.clientX - (button.offsetLeft + diameter / 2)}px`,
      });
      rippleControls.set({ scale: 0, opacity: 0.36 });
      rippleControls.start({
        scale: 4,
        opacity: 0,
        transition: { duration: 0.4 },
      });
    },
  };
  const content = (
    <>
      {(selected || icon) && (
        <div className="skc-button__icon">
          {selected ? <MaterialIcon icon="done" /> : icon}
        </div>
      )}
      {children && <span className="skc-button__label">{children}</span>}
    </>
  );

  return href && element ? (
    element({ ...props, children: content, href })
  ) : href ? (
    <a {...props} href={href}>
      {content}
    </a>
  ) : (
    <button {...props} type="button">
      {content}
      <motion.span
        initial={{ scale: 0, opacity: 0.36 }}
        animate={rippleControls}
        className="skc-button__ripple"
        style={{ ...position, width: `${diameter}px`, height: `${diameter}px` }}
      />
    </button>
  );
}

Button.displayName = "Button";
