import "@suankularb-components/css/dist/css/components/switch.css";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";

/**
 * A Switch toggles something on and off. It is usually in a Form Item. Unlike
 * Checkbox and Radio, a Switch is independent.
 * {@link https://m3.material.io/components/switch/guidelines#6add393e-e4e8-41b6-862b-5ebffb894f72 Learn the differences.}
 *
 * @param value The state of the Switch. This is useful if you want a controlled input.
 * @param onChange This function triggers when the user toggles the switch. The state is passed in via the function as a boolean.
 * @param offIcon An icon inside the Thumb when the switch is off.
 * @param onIcon An icon inside the Thumb when the switch is on.
 * @param disabled Turns the Switch gray and block any action associated with it.
 */
const Switch: StylableFC<{
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
}> = ({
  value,
  onChange,
  offIcon,
  onIcon,
  disabled,
  element: Element = "button",
  style,
  className,
}) => (
  <Element
    aria-disabled={disabled}
    aria-pressed={value}
    style={style}
    className={cn("skc-switch", value && "skc-switch--selected", className)}
    onClick={() => onChange && onChange(!value)}
  >
    <div className="skc-switch__handle">{value ? onIcon : offIcon}</div>
  </Element>
);

Switch.displayName = "Switch";

export default Switch;
