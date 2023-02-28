// External libraries
import { motion, useAnimationControls } from "framer-motion";
import * as React from "react";

// Internal components
import { Button } from "../Button";
import { MaterialIcon } from "../MaterialIcon";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/text-field.css";

// Utilities
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";
import { kebabify } from "../../utils/format";

/**
 * Props for {@link TextField Text Field}.
 */
export interface TextFieldProps extends SKComponent {
  /**
   * How the Text Field looks. An outlined Text Field has a lower emphasis than
   * filled, so it is great for a form with many fields.
   *
   * - Keep the appearance consistent across Text Fields. Separate different
   *   appearances by region.
   * - Must be `outlined` or `filled`.
   * - Always required.
   */
  appearance: "outlined" | "filled";

  /**
   * The placeholder text (when not focused and no value) and the label text
   * (when focused or has value).
   *
   * - Always required.
   */
  label: string | JSX.Element;

  /**
   * How the Text Field behaves if the field value exceeds the visual space.
   *
   * - Must be `single-line`, `multi-line`, or `textarea`.
   * - A single line Text Field can only accompany 1 line of text. Field value
   *   never wraps and instead scrolls.
   * - A multi-line Text Field starts with just accompanying 1 line but
   *   vertically extends to fit the field value as needed.
   * - A text area Text Field has a fixed height and wraps text.
   * - Optional.
   */
  behavior?: "single-line" | "multi-line" | "textarea";

  /**
   * The alignment of the input field.
   *
   * - This is useful if the input value should come immediately before the
   *   trailing text, like the start of an email.
   * - Optional.
   */
  align?: "left" | "right";

  /**
   * The leading text or icon, aligned to the left.
   *
   * - Optional.
   */
  leading?: string | JSX.Element;

  /**
   * The trailing text or icon, aligned to the right.
   *
   * - Incompatible with `canClear`, as that requires the space of the trailing icon for the clear button.
   * - Optional.
   */
  trailing?: string | JSX.Element;

  /**
   * A description of the Text Field for screen readers, similar to `alt` on `<img>`.
   *
   * - Required if `label` is a JSX Element, as it is used to generate the ID crucial for accessibility.
   */
  alt?: string;

  /**
   * A short description of the Text Field, or an error message during an error state.
   *
   * - Optional but recommended during an error state.
   */
  helperMsg?: string | JSX.Element;

  /**
   * If the user has to enter text in this field for the form to be valid.
   *
   * - Activates the error state after the user exits the Text Field without entering anything, even if `error` is false.
   * - Optional.
   */
  required?: boolean;

  /**
   * Allows the user to clear the field value with the clear button.
   *
   * - The clear button only appears if this is defined.
   * - Incompatible with `trailing`, as that uses the space of the clear button
   *   for the trailing icon.
   * - Optional.
   */
  canClear?: boolean;

  /**
   * Tells Text Field that it contains an invalid value and activates the error
   * state.
   *
   * - Optional.
   */
  error?: boolean;

  /**
   * The value inside the field. This is useful if you want a controlled input.
   *
   * - Optional.
   */
  value?: string;

  /**
   * This function triggers when the user make changes to the field value. The
   * value is passed in via the function.
   *
   * - Optional.
   *
   * @param value
   */
  onChange?: (value: string) => any;

  /**
   * Attributes for the underlying `<input>` element used as the field.
   *
   * - Optional.
   */
  inputAttr?: JSX.IntrinsicElements["input"];
}

/**
 * A place for users to enter text.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.9oc937dbw2xq SKCom documentation}
 *
 * @param appearance How the Text Field looks.
 * @param label The placeholder text and the label text.
 * @param behavior How the Text Field behaves if the field value exceeds the visual space.
 * @param align The alignment of the input field.
 * @param leading The leading text or icon, aligned to the left.
 * @param trailing The trailing text or icon, aligned to the right.
 * @param alt A description of the Text Field for screen readers, similar to `alt` on `<img>`.
 * @param helperMsg A short description of the Text Field, or an error message during an error state.
 * @param required If the user has to enter text in this field for the form to be valid.
 * @param canClear Allows the user to clear the field value with the clear button.
 * @param error Tells Text Field that it contains an invalid value and activates the error state.
 * @param value The value inside the field. This is useful if you want a controlled input.
 * @param onChange This function triggers when the user make changes to the field value.
 * @param inputAttr Attributes for the underlying `<input>` element used as the field.
 */
export function TextField({
  appearance,
  label,
  behavior,
  align,
  leading,
  trailing,
  alt,
  helperMsg,
  required,
  canClear,
  error,
  value,
  onChange,
  inputAttr,
  style,
  className,
}: TextFieldProps) {
  // Animation
  const { duration, easing } = useAnimationConfig();
  const labelControls = useAnimationControls();
  const [minifyLabel, setMinifyLabel] = React.useState<boolean | undefined>();

  // Account for when the value is set from a different source that doesn’t
  // involve focusing on the Text Field
  React.useEffect(() => {
    if (value) setMinifyLabel(true);
  }, [value]);

  // Label animation states
  const plhLabelAnimState = {
    y: 0,
    fontSize: "var(--text-lg)",
    lineHeight: "1.5rem",
    letterSpacing: 0.5,
  };
  const minifedLabelAnimState = {
    y: -24,
    fontSize: "var(--text-sm)",
    lineHeight: "1rem",
    letterSpacing: 0.4,
  };

  // Label transition
  const labelTransition = transition(duration.short4, easing.standard);

  // Watches `minifyLabel` and sets and starts transition accordingly
  React.useEffect(() => {
    // Disable initial animation
    if (minifyLabel === undefined) return;

    // Minify the label
    if (minifyLabel) {
      labelControls.set(plhLabelAnimState);
      labelControls.start({
        ...minifedLabelAnimState,
        transition: labelTransition,
      });
      return;
    }

    // Reset the label
    labelControls.set(minifedLabelAnimState);
    labelControls.start({ ...plhLabelAnimState, transition: labelTransition });
  }, [minifyLabel]);

  // Accessibility
  // Generate the base ID for `<label>` and `aria-describedby`
  const fieldID = `field-${kebabify(
    (typeof label === "string" ? label : alt)!
  )}`;

  // Props for the `<input>` or `<textarea>`
  const inputProps = {
    id: fieldID,
    "aria-describedby": `${fieldID}-helper`,
    value,
    required,
    onFocus: () => setMinifyLabel(true),
    onBlur:
      value !== undefined ? () => setMinifyLabel(Boolean(value)) : undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange && onChange(e.target.value),
    className: "skc-text-field__input",
  } satisfies JSX.IntrinsicElements["input" | "textarea"];

  return (
    <div
      style={style}
      className={cn([
        "skc-text-field",
        appearance === "outlined"
          ? "skc-text-field--outlined"
          : appearance === "filled"
          ? "skc-text-field--filled"
          : undefined,
        align === "right" ? "skc-text-field--right" : "skc-text-field--left",
        error && "skc-text-field--error",
        className,
      ])}
      {...inputAttr}
    >
      {/* Label */}
      <motion.label
        htmlFor={fieldID}
        animate={labelControls}
        className="skc-text-field__label"
      >
        {label}
      </motion.label>

      {/* Leading section */}
      {leading && <div className="skc-text-field__leading">{leading}</div>}

      {/* Input */}
      {behavior === "textarea" ? (
        <textarea {...inputProps} />
      ) : (
        <input {...inputProps} />
      )}

      {/* Trailing section/clear Button */}
      {(canClear || trailing) && (
        <div className="skc-text-field__leading">
          {canClear ? (
            <Button appearance="text" icon={<MaterialIcon icon="cancel" />} />
          ) : (
            trailing
          )}
        </div>
      )}

      {/* Helper message */}
      {helperMsg && (
        <span id={`${fieldID}-helper`} className="skc-text-field__helper-msg">
          {helperMsg}
        </span>
      )}
    </div>
  );
}

TextField.displayName = "TextField";
