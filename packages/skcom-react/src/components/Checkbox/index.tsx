// External libraries
import { motion } from "framer-motion";
import * as React from "react";

// Internal components
import { MaterialIcon } from "../MaterialIcon";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/checkbox.css";

// Utilities
import { useRipple } from "../../utils/animation";
import { cn } from "../../utils/className";

/**
 * Props for {@link Checkbox}.
 */
export interface CheckboxProps extends SKComponent {
  /**
   * The state of the Checkbox. This is useful if you want a controlled input.
   *
   * - If `tristate` is `true`, a `value` of `null` means indeterminate, which
   *   displays a dash. If not, `value` cannot be `null`.
   * - Optional.
   *
   * @see {@link https://reactjs.org/docs/forms.html#controlled-components React documention on controlled input}
   */
  value?: boolean | null;

  /**
   * This function triggers when the user toggles the Checkbox. The state is
   * passed in via the function as a boolean.
   *
   * - Optional.
   */
  onChange?: (value: boolean) => any;

  /**
   * Turns the Checkbox gray and block any action associated with it.
   * {@link https://codium.one/index.php/en/blog/77-disabled-buttons-don-t-have-to-suck Learn when to disable something.}
   *
   * - Optional.
   */
  disabled?: boolean;

  /**
   * Allows the Checkbox to have 3 states: off, on, and indeterminate.
   *
   * - Optional.
   */
  tristate?: boolean;

  /**
   * Attributes for the underlying `<input>` element.
   *
   * - Optional.
   */
  inputAttr?: React.ComponentProps<"input">;
}

/**
 * A choice from a multi-select set of choices. When alone, a Checkbox is
 * usually used for acknowledgement of or agreement to something, like a terms
 * and conditions.
 *
 * @param value The state of the Checkbox. This is useful if you want a controlled input.
 * @param onChange This function triggers when the user toggles the Checkbox.
 * @param disabled Turns the Checkbox gray and block any action associated with it.
 * @param tristate Allows the Checkbox to have 3 states: off, on, and indeterminate.
 * @param inputAttr Attributes for the underlying `<input>` element.
 */
export function Checkbox({
  value,
  onChange,
  tristate,
  disabled,
  inputAttr,
  element: Element = "label",
  style,
  className,
}: CheckboxProps) {
  // Ripple setup
  const rippleParentRef: React.Ref<HTMLDivElement> = React.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } =
    useRipple(rippleParentRef);

  return (
    <Element
      style={style}
      className={cn([
        "skc-checkbox",
        value === true && "skc-checkbox--selected",
        value === null && tristate && "skc-checkbox--indeterminate",
        disabled && "skc-checkbox--disabled",
        className,
      ])}
      {...rippleListeners}
    >
      {/* Native input (for logic and accessibility only and is hidden to
          sighted users)
        */}
      <input
        aria-checked={value === null ? "mixed" : value}
        aria-disabled={disabled}
        className="skc-checkbox__input"
        type="checkbox"
        checked={Boolean(value)}
        onChange={(event) =>
          onChange && !disabled && onChange(event.target.checked)
        }
        {...inputAttr}
      />

      {/* Visible checkbox */}
      <div aria-hidden className="skc-checkbox__box">
        <div className="skc-checkbox__icon">
          {value === true ? (
            <MaterialIcon icon="check_small" />
          ) : (
            value === null &&
            tristate && <MaterialIcon icon="check_indeterminate_small" />
          )}
        </div>
      </div>

      {/* Ripple */}
      <div
        ref={rippleParentRef}
        aria-hidden
        className="skc-checkbox__ripple-parent"
      >
        <motion.span
          aria-hidden
          initial={{ scale: 0, opacity: 0.36 }}
          animate={rippleControls}
          className="skc-checkbox__ripple"
          style={rippleStyle}
        />
      </div>
    </Element>
  );
}

Checkbox.displayName = "Checkbox";
