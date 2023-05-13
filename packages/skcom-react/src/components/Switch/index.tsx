// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/switch.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link Switch}.
 */
export interface SwitchProps extends SKComponent {
  /**
   * The state of the Switch. This is useful if you want a controlled input.
   *
   * - Optional.
   *
   * @see {@link https://reactjs.org/docs/forms.html#controlled-components React documention on controlled input}
   */
  value?: boolean;

  /**
   * This function triggers when the user toggles the switch. The state is
   * passed in via the function as a boolean.
   *
   * - Optional.
   */
  onChange?: (value: boolean) => any;

  /**
   * An icon inside the Thumb when the switch is off.
   *
   * - You are encouraged to use Material Icons as the value for `offIcon`.
   * - Optional.
   */
  offIcon?: JSX.Element;

  /**
   * An icon inside the Thumb when the switch is on.
   *
   * - You are encouraged to use Material Icons as the value for `onIcon`.
   * - Optional.
   */
  onIcon?: JSX.Element;

  /**
   * Turns the Switch gray and block any action associated with it.
   * {@link https://codium.one/index.php/en/blog/77-disabled-buttons-don-t-have-to-suck Learn when to disable something.}
   *
   * - Optional.
   */
  disabled?: boolean;

  /**
   * Attributes for the underlying `<button>` element.
   *
   * - Optional.
   */
  buttonAttr?: React.ComponentProps<"button">;

  /**
   * This prop is not supported by this component.
   */
  element?: never;
}

/**
 * A Switch toggles something on and off. It is usually in a Form Item. Unlike
 * Checkbox and Radio, a Switch is independent.
 * {@link https://m3.material.io/components/switch/guidelines#4f51b236-583e-4caa-9ae6-c8079325ef6b Learn the differences.}
 *
 * @see {@link https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing#heading=h.ab4q1pg880wv SKCom documentation}
 *
 * @param value The state of the Switch. This is useful if you want a controlled input.
 * @param onChange This function triggers when the user toggles the switch. The state is passed in via the function as a boolean.
 * @param offIcon An icon inside the Thumb when the switch is off.
 * @param onIcon An icon inside the Thumb when the switch is on.
 * @param disabled Turns the Switch gray and block any action associated with it.
 * @param buttonAttr Attributes for the underlying `<button>` element.
 */
export function Switch({
  value,
  onChange,
  offIcon,
  onIcon,
  disabled,
  buttonAttr,
  style,
  className,
}: SwitchProps) {
  return (
    <button
      aria-disabled={disabled}
      aria-pressed={value}
      style={style}
      className={cn(["skc-switch", value && "skc-switch--selected", className])}
      onClick={() => onChange && onChange(!value)}
      {...buttonAttr}
    >
      <div className="skc-switch__handle">{value ? onIcon : offIcon}</div>
    </button>
  );
}

Switch.displayName = "Switch";
