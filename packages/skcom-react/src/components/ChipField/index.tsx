// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/chip-field.css";

// Utilities
import { cn } from "../../utils/className";

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
   * The value inside the field that is used to create Input Chips. This is
   * useful if you want a controlled input.
   *
   * - Optional.
   */
  value?: string;

  /**
   * This function triggers when the user make changes to the field value. The value is passed in via the function.
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
   * This function triggers when the user hits backspace twice while in the field.
   *
   * - The behavior expected to be implemented by the developer is that the
   *   last Chip in the preceding Chip Set should be removed.
   * - Optional.
   */
  onDeleteLast?: () => any;

  /**
   * The field can have some faint text guiding the user about what to write to create an Input Chip. For example, a Chip Field for entering students into a class by student code could have a placeholder say “Enter student code.”
   *
   * - Optional.
   */
  placeholder?: string | JSX.Element;

  /**
   * The field cannot be edited.
   *
   * - Optional.
   */
  disabled?: boolean;

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
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.szjgl74eta6e SKCom documentation}
 *
 * @param children The Input Chips that the user have already entered.
 * @param value The value inside the field that is used to create Input Chips. This is useful if you want a controlled input.
 * @param onChange This function triggers when the user make changes to the field value. The value is passed in via the function.
 * @param onNewEntry This function triggers when the user hits the spacebar while in the field.
 * @param onDeleteLast This function triggers when the user hits backspace twice while in the field.
 * @param placeholder The field can have some faint text guiding the user about what to write to create an Input Chip.
 * @param disabled The field cannot be edited.
 * @param inputAttr Attributes for the underlying `<input>` element used as the field.
 */
export function ChipField({
  children,
  value,
  onChange,
  onNewEntry,
  onDeleteLast,
  placeholder,
  disabled,
  inputAttr,
  style,
  className,
}: ChipFieldProps) {
  const [lastSelected, setLastSelected] = React.useState<boolean>(false);

  return (
    <div style={style} className={cn(["skc-chip-field", className])}>
      {children}
      <label className="skc-chip-field__label">
        Classes learning this subject
      </label>
      <input
        className="skc-chip-field__input"
        value={value}
        onChange={(event) => onChange && onChange(event.target.value)}
        onKeyUp={(event) => {
          const { value } = event.target as HTMLInputElement;

          // Handles creation
          if ([" ", "Enter"].includes(event.key)) {
            // Enter signals creation of a new Chip
            if (onNewEntry)
              onNewEntry(value.slice(0, event.key === " " ? -1 : 0));
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
        }}
      />
    </div>
  );
}

ChipField.displayName = "ChipField";
