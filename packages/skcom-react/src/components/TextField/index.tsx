// External libraries
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useAnimationControls,
} from "framer-motion";
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
export interface TextFieldProps<FieldValue extends string | File>
  extends SKComponent {
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
   * - Incompatible with `canClear`, as that requires the space of the trailing
   *   icon for the clear button.
   * - Optional.
   */
  trailing?: string | JSX.Element;

  /**
   * A description of the Text Field for screen readers, similar to `alt` on `<img>`.
   *
   * - Required if `label` is a JSX Element, as it is used to generate the ID
   *   crucial for accessibility.
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
   * - Activates the error state after the user exits the Text Field without
   *   entering anything, even if `error` is false.
   * - Optional.
   */
  required?: boolean;

  /**
   * Turns the Text Field gray and block user input. `onChange` will not fire.
   * {@link https://codium.one/index.php/en/blog/77-disabled-buttons-don-t-have-to-suck Learn when to disable something.}
   *
   * - Optional.
   */
  disabled?: boolean;

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
   *
   * @see {@link https://reactjs.org/docs/forms.html#controlled-components React documention on controlled input}
   */
  value?: string;

  /**
   * This function triggers when the user make changes to the field value. The
   * value is passed in via the function.
   *
   * - Optional.
   *
   * @param value The value of the field.
   */
  onChange?: (value: FieldValue) => any;

  /**
   * Allows for translation of the “No files attached” text, which is put in
   * place of the file name when no files have been attached yet.
   *
   * - Only valid if `inputAttr.type` is `file`.
   * - Must be `th` or `en-US`, as SKCom currently only support those 2
   *   languages.
   * - Optional.
   */
  locale?: "en-US" | "th";

  /**
   * Attributes for the underlying `<input>` element used as the field.
   *
   * - Optional.
   */
  inputAttr?: React.ComponentProps<"input">;

  /**
   * This prop is not supported by this component.
   */
  element?: never;
}

/**
 * A place for users to enter text.
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
 * @param disabled Turns the Text Field gray and block user input.
 * @param canClear Allows the user to clear the field value with the clear button.
 * @param error Tells Text Field that it contains an invalid value and activates the error state.
 * @param value The value inside the field. This is useful if you want a controlled input.
 * @param onChange This function triggers when the user make changes to the field value.
 * @param locale Allows for translation of the “No files attached” text.
 * @param inputAttr Attributes for the underlying `<input>` element used as the field.
 */
export function TextField<Value extends string | File>({
  appearance,
  label,
  behavior,
  align,
  leading,
  trailing,
  alt,
  helperMsg,
  required,
  disabled,
  canClear,
  error: incError,
  value,
  onChange,
  locale,
  inputAttr,
  style,
  className,
}: TextFieldProps<Value>) {
  // Support for file input
  const [file, setFile] = React.useState<File | null>(null);

  // Animation
  const { duration, easing } = useAnimationConfig();
  const labelControls = useAnimationControls();
  const trailingControls = useAnimationControls();
  const [minifyLabel, setMinifyLabel] = React.useState<boolean | undefined>();
  const [neverResetLabel, setNeverMinifyLabel] = React.useState<boolean>(false);

  // Transition
  const fieldTransition = transition(duration.short4, easing.standard);

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
    y: appearance === "outlined" ? -24 : -8,
    fontSize: "var(--text-sm)",
    lineHeight: "1rem",
    letterSpacing: 0.4,
  };

  // Trailing section states
  const orgtrailingAnimState = { y: 0 };
  const focusedTrailingAnimState = { y: 8 };

  // Always minify label for specific input types as to not block the browser
  // input controls
  React.useEffect(() => {
    if (
      (
        [
          "color",
          "date",
          "datetime-local",
          "file",
          "month",
          "time",
          "week",
        ] as React.ComponentProps<"input">["type"][]
      ).indexOf(inputAttr?.type) !== -1
    ) {
      labelControls.set(minifedLabelAnimState);
      setNeverMinifyLabel(true);
    }
  }, [appearance, inputAttr?.type]);

  // Watches `minifyLabel` and sets and starts transition accordingly
  React.useEffect(() => {
    // Disable animation for some input types
    // Disable initial animation
    if (neverResetLabel || minifyLabel === undefined) return;

    if (minifyLabel) {
      // Minify the label
      labelControls.set(plhLabelAnimState);
      labelControls.start({
        ...minifedLabelAnimState,
        transition: fieldTransition,
      });

      // Move down the trailing section
      trailingControls.set(orgtrailingAnimState);
      trailingControls.start({
        ...focusedTrailingAnimState,
        transition: fieldTransition,
      });

      return;
    }

    // Reset the label
    labelControls.set(minifedLabelAnimState);
    labelControls.start({ ...plhLabelAnimState, transition: fieldTransition });

    // Reset the trailing section
    trailingControls.set(focusedTrailingAnimState);
    trailingControls.start({
      ...orgtrailingAnimState,
      transition: fieldTransition,
    });
  }, [minifyLabel]);

  // Auto-expand the `<textarea>` if behavior set to `multi-line`
  const textareaRef: React.Ref<HTMLTextAreaElement> = React.useRef(null);
  const expandTextarea = () => {
    if (behavior !== "multi-line") return;

    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "0";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  React.useEffect(() => expandTextarea, [value]);

  // Error state
  const [error, setError] = React.useState<boolean>(false);
  React.useEffect(() => setError(Boolean(incError)), [incError]);

  // Accessibility
  // Generate the base ID for `aria-labelledby` and `aria-describedby`
  const fieldID = `field-${kebabify(
    (typeof label === "string" ? label : alt)!
  )}`;

  return (
    <label
      style={style}
      className={cn([
        "skc-text-field",
        appearance === "outlined"
          ? "skc-text-field--outlined"
          : appearance === "filled"
          ? "skc-text-field--filled"
          : undefined,
        behavior === "multi-line"
          ? "skc-text-field--multi-line"
          : behavior === "textarea"
          ? "skc-text-field--textarea"
          : "skc-text-field--single-line",
        align === "right" ? "skc-text-field--right" : "skc-text-field--left",
        disabled && "skc-text-field--disabled",
        error && "skc-text-field--error",
        className,
      ])}
    >
      {/* Label */}
      <motion.span
        id={`${fieldID}-label`}
        animate={labelControls}
        className="skc-text-field__label"
      >
        {label}
      </motion.span>

      {/* Leading section */}
      {leading && (
        <motion.div className="skc-text-field__leading">{leading}</motion.div>
      )}

      {React.createElement(
        !behavior || behavior === "single-line" ? "input" : "textarea",
        {
          id: fieldID,
          ref: textareaRef,
          "aria-labelledby": `${fieldID}-label`,
          "aria-describedby": `${fieldID}-helper`,
          "aria-disabled": disabled,
          "aria-invalid": incError,
          value: typeof value === "string" ? value : undefined,
          required,
          readOnly: disabled,
          onFocus: !disabled ? () => setMinifyLabel(true) : undefined,
          onBlur: () => {
            if (value === undefined) return;
            setMinifyLabel(Boolean(value));
            setError(Boolean(incError || (required && !value)));
          },
          onChange: (
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
            const { files, value } = event.target as HTMLInputElement;

            // Handle file input if type is `file`
            if (inputAttr?.type === "file") {
              if (files?.length) {
                setFile(files[0]);
                onChange?.(files[0] as Value);
              } else setFile(null);
              return;
            }

            // Otherwise, treat value as text
            onChange?.(value as Value);

            if (value === undefined) expandTextarea();
          },
          className: "skc-text-field__input",
          ...inputAttr,
        }
      )}

      {/* File name */}
      {inputAttr?.type === "file" && (
        <div className="skc-text-field__input">
          {file
            ? file.name
            : locale === "th"
            ? "ยังไม่ได้แนบไฟล์"
            : "No files attached"}
        </div>
      )}

      {/* Trailing section */}
      <LayoutGroup>
        <AnimatePresence initial={false}>
          {/* Trailing section */}
          {trailing && (
            <motion.div
              animate={
                appearance === "filled" && typeof trailing === "string"
                  ? trailingControls
                  : undefined
              }
              layoutId={`${fieldID}-trailing`}
              transition={fieldTransition}
              className="skc-text-field__trailing"
            >
              {trailing}
            </motion.div>
          )}
          {/* Clear button/error Icon */}
          {(canClear || error) && (
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              layoutId={`${fieldID}-button-or-icon`}
              transition={fieldTransition}
              className="skc-text-field__trailing"
            >
              {canClear ? (
                <Button
                  appearance="text"
                  icon={<MaterialIcon icon="cancel" />}
                  disabled={disabled}
                  onClick={() => onChange?.("" as Value)}
                />
              ) : error ? (
                <MaterialIcon icon="error" fill />
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>

      {/* Helper/error message */}
      {helperMsg && (
        <span id={`${fieldID}-helper`} className="skc-text-field__helper-msg">
          {helperMsg}
        </span>
      )}
    </label>
  );
}

TextField.displayName = "TextField";
