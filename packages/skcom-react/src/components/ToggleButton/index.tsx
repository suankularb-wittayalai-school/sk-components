// External libraries
import { motion } from "framer-motion";
import * as React from "react";

// Internal components
import { MaterialIcon } from "../MaterialIcon";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/toggle-button.css";

// Utilities
import { useRipple } from "../../utils/animation";
import { cn } from "../../utils/className";

/**
 * Props for {@link ToggleButton Toggle Button}.
 */
export interface ToggleButtonProps extends SKComponent {
  /**
   * The appearance of the Toggle Button.
   *
   * Each appearance has a priority.  For example, in a video conference
   * application, the end call button has higher priority than the raise hand
   * button. In this case, the end call is “filled,” and the raise hand is
   * “outlined.”
   *
   * - Must be `filled`, `tonal`, `outlined`, or `standard`, from highest to lowest
   *   priority.
   * - Always required.
   */
  appearance: "filled" | "tonal" | "outlined" | "standard";

  /**
   * A Toggle Button’s action is only communicated via its icon, so keep the
   * icon clear.
   *
   * - You are encouraged to use {@link MaterialIcon Material Icons} as the value for `icon`.
   * - Always required, as a Toggle Button cannot be empty.
   */
  icon: JSX.Element;

  /**
   * A description of the Toggle Button for screen readers, similar to `alt` on
   * `<img>`.
   *
   * - Always required, as an icon has no significance for screen readers.
   */
  alt: string;

  /**
   * A message shown in a tooltip when the user hovers over the Toggle Button.
   *
   * - Always required, just in case the icon is not clear enough for the use
   *   to infer its action.
   */
  tooltip: string;

  /**
   * If the action the Toggle Button accomplishes is dangerous, like unmuting.
   * If it is, the Toggle Button turns red (defined as `error` in the palette).
   *
   * - Optional.
   */
  dangerous?: boolean;

  /**
   * Turns the Toggle Button gray and block any action associated with it.
   * `onChange` will have no effect.
   * {@link https://codium.one/index.php/en/blog/77-disabled-buttons-don-t-have-to-suck Learn when to disable something.}
   *
   * - Optional.
   */
  disabled?: boolean;

  /**
   * Whether the Toggle Button is toggled on or off. This is useful if you want
   * a controlled input.
   *
   * - Optional.
   *
   * @see {@link https://reactjs.org/docs/forms.html#controlled-components React documention on controlled input}
   */
  value?: boolean;

  /**
   * This function triggers when the user toggles the Toggle Button.
   *
   * - Optional.
   *
   * @param state Whether the Toggle Button is toggled on or off.
   */
  onChange?: (state: boolean) => void;
}

/**
 * A Button with just an icon that can be toggled on and off.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.3rmzxf2aqo3r SKCom documentation}
 *
 * @param appearance The appearance of the Toggle Button.
 * @param icon A Toggle Button’s action is only communicated via its icon, so keep the icon clear.
 * @param alt A description of the Toggle Button for screen readers, similar to `alt` on `<img>`.
 * @param tooltip A message shown in a tooltip when the user hovers over the Toggle Button.
 * @param dangerous If the action the Toggle Button accomplishes is dangerous, like unmuting.
 * @param disabled Turns the Toggle Button gray and block any action associated with it.
 * @param value Whether the Toggle Button is toggled on or off.
 * @param onChange This function triggers when the user toggles the Toggle Button.
 */
export function ToggleButton({
  appearance,
  icon,
  alt,
  tooltip,
  dangerous,
  disabled,
  value,
  onChange,
  style,
  className,
}: ToggleButtonProps) {
  // Ripple setup
  const buttonRef = React.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(buttonRef);

  return (
    <button
      ref={buttonRef}
      // We’re using `aria-disabled` instead of `disabled` because it does not
      // disable tabbing in, which is better for accessibility.
      aria-disabled={disabled}
      aria-pressed={value}
      aria-label={alt}
      title={tooltip}
      style={style}
      className={cn([
        "skc-toggle-button",
        appearance === "filled"
          ? "skc-toggle-button--filled"
          : appearance === "tonal"
          ? "skc-toggle-button--tonal"
          : appearance === "outlined"
          ? "skc-toggle-button--outlined"
          : appearance === "standard"
          ? "skc-toggle-button--standard"
          : undefined,
        value && "skc-toggle-button--selected",
        dangerous && "skc-toggle-button--dangerous",
        className,
      ])}
      onClick={() => onChange && !disabled && onChange(!value)}
      {...rippleListeners}
    >
      {icon}
      <motion.span
        initial={{ scale: 0, opacity: 0.36 }}
        animate={rippleControls}
        className="skc-toggle-button__ripple"
        style={rippleStyle}
      />
    </button>
  );
}

ToggleButton.displayName = "Toggle Button";
