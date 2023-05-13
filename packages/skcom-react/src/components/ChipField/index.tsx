// External libraries
import { motion, useAnimationControls } from "framer-motion";
import * as React from "react";

// Internal components
import { ChipSet } from "../ChipSet";
import { Progress } from "../Progress";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/chip-field.css";

// Utilities
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";
import { kebabify } from "../../utils/format";

/**
 * Props for {@link ChipField Chip Field}.
 */
export interface ChipFieldProps extends SKComponent {
  /**
   * The Input Chips that the user have already entered.
   *
   * - Must be a Chip Set with only Input Chips.
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * The placeholder text (if no placeholder specified or when not focused and
   * no value) and the label text (when focused or has value).
   *
   * - Always required.
   */
  label: string | JSX.Element;

  /**
   * A description of the Chip Field for screen readers, similar to `alt` on
   * `<img>`.
   *
   * - Required if `label` is a JSX Element, as it is used to generate the ID
   *   crucial for accessibility.
   */
  alt?: string;

  /**
   * The value inside the field that is used to create Input Chips. This is
   * useful if you want a controlled input.
   *
   * - Optional.
   */
  value?: string;

  /**
   * This function triggers when the user makes changes to the field value. The
   * value is passed in via the function.
   *
   * - Optional.
   */
  onChange?: (value: string) => any;

  /**
   * This function triggers when the user hits the spacebar while in the field.
   *
   * - The behavior expected to be implemented by the developer is that a new
   *   Input Chip is created in the preceding Chip Set with the data passed
   *   through this function.
   * - Optional.
   */
  onNewEntry?: (value: string) => any;

  /**
   * This function triggers when the user hits backspace twice while in the
   * field.
   *
   * - The behavior expected to be implemented by the developer is that the
   *   last Chip in the preceding Chip Set should be removed.
   * - Optional.
   */
  onDeleteLast?: () => any;

  /**
   * An array of characters that trigger the creation of a new Input Chip.
   *
   * - Optional.
   */
  entrySeparators?: string[];

  /**
   * The field can have some faint text guiding the user about what to write to
   * create an Input Chip. For example, a Chip Field for entering students into
   * a class by student code could have a placeholder say “Enter student code.”
   *
   * - Optional.
   */
  placeholder?: string;

  /**
   * Disable the Chip Field and add a Progress linear beneath the component to
   * signify loading status. `onClick` and `href` will have no effect.
   *
   * - Optional.
   */
  loading?: boolean | number;

  /**
   * The field cannot be edited.
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
   * Attributes for the underlying `<input>` element used as the field.
   *
   * - Optional.
   */
  inputAttr?: JSX.IntrinsicElements["input"];
}

/**
 * A combination of Input Chips and a Text Field. Users can simply start typing
 * into the Chip Field; their input is converted into an Input Chip on spacebar
 * press.
 *
 * @see {@link https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing#heading=h.szjgl74eta6e SKCom documentation}
 *
 * @param children The Input Chips that the user have already entered.
 * @param label The placeholder text (if no placeholder specified or when not focused and no value) and the label text (when focused or has value).
 * @param alt A description of the Chip Field for screen readers, similar to `alt` on `<img>`.
 * @param value The value inside the field that is used to create Input Chips. This is useful if you want a controlled input.
 * @param onChange This function triggers when the user makes changes to the field value. The value is passed in via the function.
 * @param onNewEntry This function triggers when the user hits the spacebar while in the field.
 * @param onDeleteLast This function triggers when the user hits backspace twice while in the field.
 * @param entrySeparators An array of characters that trigger the creation of a new Input Chip.
 * @param placeholder The field can have some faint text guiding the user about what to write to create an Input Chip.
 * @param loading Disable the Chip Field and add a Progress linear beneath the component to signify loading status.
 * @param disabled The field cannot be edited.
 * @param locale Allows for translation of the accessibility labels.
 * @param inputAttr Attributes for the underlying `<input>` element used as the field.
 */
export function ChipField({
  children,
  label,
  alt,
  value,
  onChange,
  onNewEntry,
  onDeleteLast,
  entrySeparators,
  placeholder,
  loading,
  disabled,
  locale,
  inputAttr,
  style,
  className,
}: ChipFieldProps) {
  // Chip deletion preparation
  const [lastSelected, setLastSelected] = React.useState<boolean>(false);
  const [noOfChips, setNoOfChips] = React.useState<number>(0);

  // Count the number of Input Chips as so to know which Chip to select for the
  // “last Chip”
  React.useEffect(
    () =>
      setNoOfChips(
        React.Children.count(
          (React.Children.only(children) as JSX.Element).props.children
        )
      ),
    [children]
  );

  // Animation
  const { duration, easing } = useAnimationConfig();
  const labelControls = useAnimationControls();
  const [minifyLabel, setMinifyLabel] = React.useState<boolean | undefined>();
  const [neverResetLabel, setNeverResetLabel] = React.useState<boolean>(false);

  // Transition
  const labelTransition = transition(duration.short4, easing.standard);

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

  // Animate as specified by `minifyLabel`
  React.useEffect(() => {
    // Disable initial animation
    if (neverResetLabel || minifyLabel === undefined) return;

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
    labelControls.start({
      ...plhLabelAnimState,
      transition: labelTransition,
    });
  }, [minifyLabel]);

  // Never minify the label if placeholder specified
  React.useEffect(() => {
    if (placeholder) {
      setNeverResetLabel(true);
      labelControls.set(minifedLabelAnimState);
    }
  }, [placeholder]);

  // Minify on focus to leave space to type
  const handleFocus = () => setMinifyLabel(true);
  const handleBlur = () => {
    if (!noOfChips) setMinifyLabel(false);
  };

  // Always minify the label if Chips are present
  React.useEffect(() => {
    if (noOfChips) setMinifyLabel(true);
  }, [noOfChips]);

  // Chip creation and deletion

  const handleChange = (event: React.ChangeEvent) => {
    // If the user continues typing after they selected a Chip, that Chip is
    // unselected
    if (lastSelected) setLastSelected(false);

    // Only execute if all required functions passed in
    if (!onChange) return;

    // If the last character of the field value is a seperator, the user has
    // entered a new entry. This entry is passed to `onNewEntry`
    const { value } = event.target as HTMLInputElement;

    if (
      onNewEntry &&
      (entrySeparators || [" ", ",", ";"]).includes(value?.at(-1) || "")
    ) {
      onNewEntry(value.slice(0, -1));
      onChange("");
      return;
    }

    // Otherwise, just pass the value to `onChange` as part of the controlled
    // input
    onChange(value);
  };

  const handleKeyUp = (event: React.KeyboardEvent) => {
    const { value } = event.target as HTMLInputElement;

    // Handles creation
    if (event.key === "Enter") {
      // Enter signals creation of a new Chip
      if (onNewEntry && onChange) {
        onNewEntry(value);
        onChange("");
      }
    }

    // Handles deletion
    else if (event.key === "Backspace" && value === "") {
      // First backspace selects the last Chip
      if (!lastSelected) setLastSelected(true);
      // Second backspace signals deletion of the last Chip
      else if (onDeleteLast) {
        onDeleteLast();
        setLastSelected(false);
      }
    }

    // Handles cancellation of deletion
    else if (
      ["Escape", "ArrowRight", "Right", "End"].includes(event.key) &&
      lastSelected
    )
      setLastSelected(false);
  };

  // Accessibility
  // Generate the base ID for `<label>`
  const fieldID = `chip-field-${kebabify(
    (typeof label === "string" ? label : alt)!
  )}`;

  return (
    <div style={style} className={cn(["skc-chip-field", className])}>
      <motion.label
        htmlFor={fieldID}
        animate={labelControls}
        className="skc-chip-field__label"
      >
        {label}
      </motion.label>

      <div className="skc-chip-field__scrollable">
        <div className="skc-chip-field__content">
          {/* Chip Set */}
          <ChipSet divAttr={{ "aria-live": "polite", "aria-relevant": "all" }}>
            {React.Children.map(
              (React.Children.only(children) as JSX.Element).props.children,
              (child, idx) => {
                if (!lastSelected) return child;

                if (idx === noOfChips - 1)
                  return React.cloneElement(child as JSX.Element, {
                    selected: true,
                  });
                return child;
              }
            )}
          </ChipSet>

          {/* Input */}
          <input
            id={fieldID}
            aria-label={alt}
            aria-disabled={disabled}
            enterKeyHint="enter"
            className="skc-chip-field__input"
            placeholder={placeholder}
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            {...inputAttr}
          />
        </div>
      </div>

      {/* Linear progress for i.e. fetching a Chip from user data */}
      <Progress
        appearance="linear"
        alt={locale === "th" ? "กำลังโหลด" : "Loading…"}
        value={typeof loading === "number" ? loading : undefined}
        visible={typeof loading === "number" || loading}
      />
    </div>
  );
}

ChipField.displayName = "ChipField";
