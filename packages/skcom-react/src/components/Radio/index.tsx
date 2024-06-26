// External libraries
import { motion } from "framer-motion";
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/radio.css";

// Utilities
import { useRipple } from "../../utils/animation";
import { cn } from "../../utils/className";

/**
 * Props for {@link Radio}.
 */
export interface RadioProps extends SKComponent {
  /**
   * The state of the Radio. This is useful if you want a controlled input.
   *
   * - Optional.
   *
   * @see {@link https://reactjs.org/docs/forms.html#controlled-components React documention on controlled input}
   */
  value?: boolean;

  /**
   * This function triggers when the user toggles the Radio. The state is
   * passed in via the function as a boolean.
   *
   * - Optional.
   *
   * @param value Whether the Radio is toggled to on or off.
   */
  onChange?: (value: boolean) => any;

  /**
   * Turns the Radio gray and block any action associated with it.
   * {@link https://codium.one/index.php/en/blog/77-disabled-buttons-don-t-have-to-suck Learn when to disable something.}
   *
   * - Optional.
   */
  disabled?: boolean;

  /**
   * Attributes for the underlying `<input>` element.
   *
   * - Optional.
   */
  inputAttr?: React.ComponentProps<"input">;
}

/**
 * A choice from a single-select set of choices. Unlike Checkbox and Switch,
 * Radio always appear in a group.
 *
 * @param value The state of the Radio. This is useful if you want a controlled input.
 * @param onChange This function triggers when the user toggles the Radio.
 * @param disabled Turns the Radio gray and block any action associated with it.
 * @param inputAttr Attributes for the underlying `<input>` element.
 */
export function Radio({
  value,
  onChange,
  disabled,
  inputAttr,
  element: Element = "label",
  style,
  className,
}: RadioProps) {
  // Ripple setup
  const rippleParentRef: React.Ref<HTMLDivElement> = React.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } =
    useRipple(rippleParentRef);

  return (
    <Element
      style={style}
      className={cn([
        "skc-radio",
        disabled && "skc-radio--disabled",
        className,
      ])}
      {...rippleListeners}
    >
      {/* Native input (for logic and accessibility only and is hidden to
          sighted users) */}
      <input
        aria-checked={value}
        aria-disabled={disabled}
        className="skc-radio__input"
        type="radio"
        checked={value}
        onChange={(event) =>
          onChange && !disabled && onChange(event.target.checked)
        }
        {...inputAttr}
      />

      {/* Visible radio */}
      <div aria-hidden className="skc-radio__circle">
        <div className="skc-radio__marker" />
      </div>

      {/* Ripple */}
      <div
        ref={rippleParentRef}
        aria-hidden
        className="skc-radio__ripple-parent"
      >
        <motion.span
          aria-hidden
          initial={{ scale: 0, opacity: 0.36 }}
          animate={rippleControls}
          className="skc-radio__ripple"
          style={rippleStyle}
        />
      </div>
    </Element>
  );
}

Radio.displayName = "Radio";
