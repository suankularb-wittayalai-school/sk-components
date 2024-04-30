// External libraries
import * as React from "react";

// Internal components
import { Interactive } from "../Interactive";
import { MaterialIcon } from "../MaterialIcon";
import { Progress } from "../Progress";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/button.css";

// Utilities
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
   */
  onClick?: () => any;

  /**
   * The URL of the page this Button leads to, similar to `href` on `<a>`.
   */
  href?: string;
}

/**
 * Button helps users take action, whether it’s logging in, liking a post, or
 * going to a page.
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
  element,
  style,
  className,
}: ButtonProps) {
  const buttonRef: React.Ref<HTMLButtonElement> = React.useRef(null);

  // Maintain the width of the Button while loading
  const [buttonWidth, setButtonWidth] = React.useState<number>();
  React.useEffect(() => {
    // Get the Button element
    const button = buttonRef.current;
    if (!button) return;

    // If the Button is contained by a full-aligned Actions, don’t apply the
    // width
    let containedByActions = false;
    document
      .querySelectorAll(".skc-actions.skc-actions--full")
      .forEach((item) => {
        if (item.contains(button)) containedByActions = true;
      });
    if (containedByActions) return;

    // We’re not using `clientWidth` here because that property is rounded,
    // which can cause layout shifts as the Button transition to and from the
    // loading state. `getBoundingClientRect` produces the exact width value.
    const { width } = button.getBoundingClientRect();
    setButtonWidth(width - (appearance === "outlined" ? 2 : 0));
  }, []);

  return (
    <Interactive
      {...(!(disabled || loading) && { onClick, href })}
      element={element}
      attr={{
        ref: buttonRef,
        // We’re using `aria-disabled` instead of `disabled` because it does
        // not disable tabbing in, which is better for accessibility.
        "aria-disabled":
          disabled || loading === true || typeof loading === "number",
        "aria-selected": selected,
        "aria-label": alt,
        title: tooltip,
      }}
      style={{
        ...style,
        width: loading ? buttonWidth : undefined,
      }}
      className={cn([
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
        loading === true && "skc-button--loading",
        className,
      ])}
    >
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
    </Interactive>
  );
}

Button.displayName = "Button";
