// External libraries
import { motion } from "framer-motion";
import * as React from "react";

// Internal components
import { MaterialIcon } from "../MaterialIcon";
import { Progress } from "../Progress";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/button.css";

// Utilities
import { useRipple } from "../../utils/animation";
import { cn } from "../../utils/className";

/**
 * Props for {@link Button}.
 */
export interface ButtonProps extends SKComponent {
  /**
   * The text displayed inside the Button.
   *
   * - Must be a string or a JSX Element.
   * - Required if `icon` is undefined, as a Button cannot be empty.
   */
  children?: React.ReactNode;

  /**
   * The appearance of the Button.
   *
   * Each appearance has a priority. For example, in a log in page, the log in
   * button has higher priority than the password recovery button. In this
   * case, the log in button is “filled,” and the password recovery is “text.”
   *
   * - Must be `filled`, `tonal`, `outlined`, or `text`, from highest to lowest
   *   priority.
   * - Always required.
   */
  appearance: "filled" | "tonal" | "outlined" | "text";

  /**
   * An icon can appear before the text (`children`) in a Button. In a page
   * with many buttons, icons can quickly orient users.
   *
   * - You are encouraged to use {@link MaterialIcon Material Icons} as the value for `icon`.
   * - Normally optional but required if `children` is undefined, as a Button
   *   cannot be empty.
   */
  icon?: JSX.Element;

  /**
   * A description of the Button for screen readers, similar to `alt` on
   * `<img>`.
   *
   * - Required if the Button just includes `icon`, because an icon has no
   *   significance for screen readers.
   */
  alt?: string;

  /**
   * A message shown in a tooltip when the user hovers over the Button.
   *
   * - Optional.
   */
  tooltip?: string;

  /**
   * If the Button is selected. `icon` is replaced with a checkmark if this is
   * true.
   *
   * - **Important**: this is intended to be used only when the Button is
   *   inside a Segmented Button. This prop will still be functional otherwise,
   *   but it is against Material guidelines.
   * - Required when inside a Segmented Button.
   */
  selected?: boolean;

  /**
   * If the action the Button accomplishes is dangerous, like deleting your
   * account. If it is, the Button turns red (defined as `error` in the
   * palette).
   *
   * - Optional.
   */
  dangerous?: boolean;

  /**
   * {@link disabled Disable} the Button and add a Progress spinner in front of
   * the text to signify loading status. `onClick` and `href` will have no
   * effect.
   *
   * - Optional.
   */
  loading?: boolean | number;

  /**
   * Turns the Button gray and block any action associated with it. `onClick`
   * and `href` will have no effect.
   * {@link https://codium.one/index.php/en/blog/77-disabled-buttons-don-t-have-to-suck Learn when to disable something.}
   *
   * - Optional.
   */
  disabled?: boolean;

  /**
   * Allows for translation of the accessibility labels.
   *
   * - Must be `th` or `en-US`, as SKCom currently only support those 2
   *   languages.
   * - Optional.
   */
  locale?: "en-US" | "th";

  /**
   * The function called when the user interacts with the Button, similar to
   * `onClick` on `<button>`.
   *
   * - Incompatible with `href`.
   */
  onClick?: () => any;

  /**
   * The URL of the page this Button leads to, similar to `href` on `<a>`.
   *
   * - Incompatible with `onClick`.
   */
  href?: string;

  /**
   * Change the underlying element from `<a>` to a custom element. This is
   * useful when a framework you’re using has a Link component for routing.
   * An example is `next/link` from Next.js.
   *
   * - Incompatible with `onClick`.
   */
  element?: ({
    children,
    ref,
    title,
    style,
    className,
    href,
    onClick,
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
    onClick: (event: React.MouseEvent) => void;
    onTouchStart: (event: React.TouchEvent) => void;
    onMouseDown: (event: React.MouseEvent) => void;
    onKeyDown: (event: React.KeyboardEvent) => void;
  }) => JSX.Element | null;
}

/**
 * Button helps users take action, whether it’s logging in, liking a post, or going to a page.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.48e8htvs5p0g SKCom documentation}
 *
 * @param children The text displayed inside the Button.
 * @param appearance The appearance of the Button.
 * @param icon An icon can appear before the text (`children`) in a Button.
 * @param alt A description of the Button for screen readers, similar to `alt`on `<img>`.
 * @param tooltip A message shown in a tooltip when the user hovers over the Button.
 * @param selected If the Button is selected. `icon` is replaced with a checkmark if this is true.
 * @param dangerous If the action the Button accomplishes is dangerous, like deleting your account.
 * @param loading Disable the Button and add a Progress spinner in front of the text to signify loading status.
 * @param disabled Turns the Button gray and block any action associated with it.
 * @param locale Allows for translation of the accessibility labels.
 * @param onClick The function called when the user interacts with the Button.
 * @param href The URL of the page this Button leads to.
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
  locale,
  onClick,
  href,
  element: Element,
  style,
  className,
}: ButtonProps) {
  // Ripple setup
  const buttonRef: React.LegacyRef<any> = React.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(buttonRef);

  const [buttonWidth, setButtonWidth] = React.useState<number>();
  React.useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;
    // (@SiravitPhokeed)
    // We’re not using `clientWidth` here because that property is rounded,
    // which can cause layout shifts as the Button transition to and from the
    // loading state. `getBoundingClientRect` produces the exact width value.
    const { width } = button.getBoundingClientRect();
    setButtonWidth(width - (appearance === "outlined" ? 2 : 0));
  }, []);

  /**
   * Props on `<a>` or `<button>`.
   *
   * We had to extract the props into a constant because they are used twice,
   * on `<a>` and on `<button>`.
   */
  const props = {
    ref: buttonRef,
    // We’re using `aria-disabled` instead of `disabled` because it does not
    // disable tabbing in, which is better for accessibility.
    "aria-disabled":
      disabled || loading === true || typeof loading === "number",
    "aria-selected": selected,
    "aria-label": alt,
    title: tooltip,
    style: { ...style, width: loading !== undefined ? buttonWidth : undefined },
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
      loading !== undefined && "skc-button--loading",
      className,
    ]),
    onClick: () => {
      if (!(disabled || loading) && onClick && !href) onClick();
    },
    ...rippleListeners,
  } satisfies JSX.IntrinsicElements["a" | "button"];

  /**
   * The inner content of `<a>` and `<button>`.
   *
   * Same reason as {@link props}.
   */
  const content = (
    <>
      {loading ? (
        <Progress
          appearance="circular"
          alt={locale === "th" ? "กำลังโหลด" : "Loading…"}
          value={typeof loading === "number" ? loading : undefined}
          visible
        />
      ) : (
        <>
          {(selected || icon) && (
            <div className="skc-button__icon">
              {selected ? <MaterialIcon icon="done" /> : icon}
            </div>
          )}
          {children && <span className="skc-button__label">{children}</span>}
        </>
      )}
      <motion.span
        initial={{ scale: 0, opacity: 0.36 }}
        animate={rippleControls}
        className="skc-button__ripple"
        style={rippleStyle}
      />
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
      <button {...props} type="button">
        {content}
      </button>
    )
  );
}

Button.displayName = "Button";
